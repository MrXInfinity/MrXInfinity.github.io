import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from "react";
import { cn } from "@/src/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-5 py-2 text-center  text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        contained: "bg-primary-main text-white",
        outline:
          "border-2 border-primary-main text-primary-main hover:bg-primary-main hover:text-white",
        secondary: "bg-[#E8E8E8] text-primary-main",
        basic: "rounded-none",
        reverseOutline:
          "border-2 border-white text-white hover:bg-white hover:text-primary-main",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export type ButtonOrLinkProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export type HTMLButtonProps = HTMLButtonElement & HTMLAnchorElement;

const Button = forwardRef<HTMLButtonProps, ButtonOrLinkProps>(
  ({ className, variant, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          className={cn(buttonVariants({ variant, className }))}
          ref={ref}
          {...props}
          href={href}
        >
          {props.children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

const FramerButton = motion(Button);

Button.displayName = "Button";

export { Button, buttonVariants, FramerButton };
