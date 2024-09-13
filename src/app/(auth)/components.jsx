import { Logo } from '@/components/ui';
import { booleanAttr, cn } from '@/components/utils';

/** @type {React.FC<React.HTMLProps<HTMLDivElement>>} */
export const AuthLayout = ({ children, className, title, ...props }) => {
  return (
    <div
      className={cn(
        'container flex max-w-xl flex-1 flex-col items-center justify-center gap-6',
        className,
      )}
      {...props}>
      <Logo />
      <h1 className="mb-6 text-center text-[1.75rem] leading-tight sm:text-[2.5rem] lg:text-[3.75rem]">
        {title}
      </h1>
      {children}
    </div>
  );
};

/**
 * @type {React.FC<
 *   React.HTMLProps<HTMLDivElement> & {
 *     step: 1 | 2 | 3;
 *     description?: string;
 *   }
 * >}
 */
export const OnboardingProgress = ({
  className,
  description,
  step,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col" {...props}>
      {description && <p className="mb-5 text-center">{description}</p>}
      <div className="flex flex-row gap-2">
        {[1, 2, 3].map((e) => (
          <span
            key={`onboarding--${e}`}
            className="h-1 flex-1 rounded-full bg-gray data-[active]:bg-primary-red"
            data-active={booleanAttr(step >= e)}
          />
        ))}
      </div>
    </div>
  );
};
