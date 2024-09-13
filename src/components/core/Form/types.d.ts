import React, { createContext } from 'react';
import { Slot } from '@radix-ui/react-slot';
import type {
  ControllerProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

export function FormElement<
  T extends FieldValues,
  C = any,
  V extends FieldValues | undefined = undefined,
>({
  ctx,
  ...attr
}: React.FormHTMLAttributes<HTMLFormElement> & {
  ctx: UseFormReturn<T, C, V>;
}): React.JSX.Element;

type FormFieldContextValue<
  V extends FieldValues = FieldValues,
  N extends FieldPath<V> = FieldPath<V>,
> = { name: N };

const FormFieldContext = createContext({} as FormFieldContextValue);

type FormItemContextValue = { id: string };
const FormItemContext = createContext({} as FormItemContextValue);

export function FormField<
  V extends FieldValues = FieldValues,
  N extends FieldPath<V> = FieldPath<V>,
>(props: ControllerProps<V, N>): JSX.Element;

export function FormItem(
  props: React.HTMLProps<HTMLDivElement>,
): React.JSX.Element;

export function FormControl(
  props: React.ComponentProps<typeof Slot>,
): React.JSX.Element;

export function FormMessage(
  props: React.HTMLProps<HTMLParagraphElement>,
): React.JSX.Element;
