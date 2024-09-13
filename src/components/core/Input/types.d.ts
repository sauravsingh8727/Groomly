import { forwardRef, memo } from 'react';
import { VariantProps } from 'class-variance-authority';
import { inputVariants } from './index';

type Variants = VariantProps<typeof inputVariants>;

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Variants
> & {
  before?: React.ReactNode;
  after?: React.ReactNode;
  inputClassName?: string;
} & Variants;

export const Input = memo(forwardRef<HTMLInputElement, InputProps>());
