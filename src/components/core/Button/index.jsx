import { forwardRef, memo } from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from '@/components/core';
import { cn } from '@/components/utils';

export const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium ring-gray ring-offset-1 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2`,
  {
    variants: {
      variant: {
        primary: `bg-primary-red text-white hover:bg-mistake focus-visible:bg-mistake disabled:bg-secondary-gray`,
        secondary: `border border-current text-primary-red hover:text-mistake focus-visible:text-mistake`,
        link: `px-4 text-foreground decoration-gray underline-offset-2 hover:underline focus-visible:underline`,
      },
      size: {
        default: 'h-11 px-8 text-base',
        lg: 'h-12 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

/** @type {typeof import('./types.d.ts').Button} */
export const Button = memo(
  forwardRef((props, ref) => {
    const { className, icon, variant, size, asChild = false, ...attr } = props;
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          icon ? 'aspect-square p-0' : '',
        )}
        {...attr}
        ref={ref}
      />
    );
  }),
);
Button.displayName = 'Button';
