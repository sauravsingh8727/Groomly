'use client';

import { createContext, useContext, useEffect, useId, useState } from 'react';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';
import { Slot } from '@/components/core';
import { cn } from '@/components/utils';

/** @type {typeof import('./types.d.ts').FormElement} */
function FormElement({ ctx, ...attr }) {
  const [mounted, setMounted] = useState(false);
  // disable inbuilt form validation on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <FormProvider {...ctx}>
      <form noValidate={mounted} {...attr} />
    </FormProvider>
  );
}

/** @type {typeof import('./types.d.ts').FormFieldContext} */
// @ts-ignore
const FormFieldContext = createContext({});

/** @type {typeof import('./types.d.ts').FormItemContext} */
// @ts-ignore
const FormItemContext = createContext({});

/** @type {typeof import('./types.d.ts').FormField} */
function FormField(props) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

export function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const id = itemContext.id;

  return {
    id,
    formMessageId: `${id}-form-message`,
    name: fieldContext.name,
    ...fieldState,
  };
}

/** @type {typeof import('./types.d.ts').FormItem} */
function FormItem(props) {
  return (
    <FormItemContext.Provider value={{ id: useId() }}>
      <div {...props} className={cn('flex flex-col gap-1', props.className)} />
    </FormItemContext.Provider>
  );
}

/** @type {typeof import('./types.d.ts').FormControl} */
function FormControl(props) {
  let { error, id, formMessageId } = useFormField();
  return (
    <Slot
      id={id}
      aria-invalid={!!error}
      aria-describedby={!!error ? formMessageId : undefined}
      {...props}
    />
  );
}

/** @type {typeof import('./types.d.ts').FormMessage} */
function FormMessage(props) {
  let { className, children, ...attr } = props;
  let { error, formMessageId } = useFormField();
  let body = error ? String(error?.message) : children;

  if (!body) return null;
  return (
    <p
      id={formMessageId}
      className={cn('text-sm text-red-500', className)}
      {...attr}>
      {body}
    </p>
  );
}

export const Form = Object.assign(FormElement, {
  Item: FormItem,
  Control: FormControl,
  Message: FormMessage,
  Field: FormField,
});
