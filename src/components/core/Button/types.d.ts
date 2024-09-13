import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './index';

type Variants = VariantProps<typeof buttonVariants>;

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof Variants
> & {
  icon?: boolean;
  asChild?: boolean;
} & Variants;

export const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(),
);
