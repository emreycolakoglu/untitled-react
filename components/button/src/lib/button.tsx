import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import React from "react";

// https://stackoverflow.com/a/77944537

const buttonVariants = cva(
  "inline-flex justify-center items-center rounded-lg font-semibold",
  {
    variants: {
      variant: {
        primary: "border border-solid shadow",
        secondary: "border border-solid shadow",
        tertiary: "border border-solid",
        link: "",
      },
      size: {
        sm: "gap-2 py-2 px-3.5 text-sm",
        md: "gap-2 py-2.5 px-4 text-sm",
        lg: "gap-2 py-3 px-[18px] text-base",
        xl: "gap-2 py-3.5 px-5 text-base",
        "2xl": "gap-3 py-4 px-7 text-lg",
      },
      desctructive: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button
    className={twMerge(clsx(buttonVariants({ variant, size }), className))}
  >
    asd
  </button>
));

Button.displayName = "Button";

export { Button };
