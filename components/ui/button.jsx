import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-brand-primary to-brand-primary/90 text-neutral-darkest shadow-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-primary/30',
        secondary:
          'bg-white text-neutral-darkest border-2 border-transparent shadow-md hover:bg-brand-primary hover:text-neutral-darkest hover:scale-105 hover:shadow-xl',
        'secondary-alt':
          'bg-transparent text-white border-2 border-white shadow-md hover:bg-brand-primary hover:text-neutral-darkest hover:border-brand-primary hover:scale-105',
        alternate:
          'bg-white text-neutral-darkest shadow-lg hover:bg-brand-primary hover:text-neutral-darkest hover:scale-105 hover:shadow-2xl',
        outline:
          'border-2 border-neutral-light bg-transparent text-neutral-darkest hover:bg-brand-primary hover:text-neutral-darkest hover:border-brand-primary hover:shadow-md',
        ghost:
          'text-neutral-darkest hover:bg-brand-primary hover:text-neutral-darkest',
        link:
          'text-scheme-text underline-offset-4 hover:underline hover:text-brand-primary',
        danger:
          'bg-gradient-to-r from-brand-red to-brand-red/90 text-white shadow-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-red/30',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
        link: 'h-auto p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconLeft,
      iconRight,
      loading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
            {props.children}
            {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
