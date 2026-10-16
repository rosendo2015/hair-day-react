import cx from "classnames";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import Text from "../Text";
import { buttonTextVariants, buttonVariants } from "./buttonVariants";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(buttonVariants({ variant, size, disabled }), className)}
      disabled={disabled}
      {...props}
    >
      <Text
        variant="label-medium"
        className={buttonTextVariants({ variant, size })}
      >
        {children}
      </Text>
    </button>
  );
}
