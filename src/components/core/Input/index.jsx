import { forwardRef, memo, useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/components/utils';
import styles from './style.module.scss';

export const inputVariants = cva(
  'inline-flex items-center justify-center gap-[0.5em] rounded-full bg-gray-pale text-sm ring-gray ring-offset-1 ring-offset-background transition-colors focus-within:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-10 px-5 text-sm',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

/** @type {typeof import('./types.d.ts').Input} */
export const Input = memo(
  forwardRef((props, ref) => {
    const { before, after, inputClassName, size, className, ...attr } = props;

    // an id is required to ensure perfect focus state inside label element
    const inputId = useId();
    attr.id ??= 'input-' + inputId;

    return (
      <label
        htmlFor={attr.id}
        className={cn(styles.input, inputVariants({ size }), className)}>
        {before}
        <input
          {...attr}
          ref={ref}
          className={cn(
            'peer/input h-full flex-1 whitespace-nowrap bg-transparent p-0 text-black placeholder:text-zinc-400 focus-visible:outline-none',
            inputClassName,
          )}
        />
        {after}
      </label>
    );
  }),
);
Input.displayName = 'Input';
