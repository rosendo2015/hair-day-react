import cx from "classnames";
import type { ComponentProps } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import Icon from "../Icon";
import {
  buttonIconSvgVariants,
  buttonIconVariants,
} from "./buttonIconVariants";

export interface ButtonIconProps
  extends
    Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon?: ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIcon(
    {
      shape,
      variant,
      size,
      state,
      disabled,
      handling,
      className,
      icon = TrashIcon,
      type = "button",
      ...props
    },
    ref,
  ) {
    const isHandling = Boolean(handling);
    const SvgComponent = isHandling ? SpinnerIcon : icon;

    return (
      <button
        ref={ref}
        type={type}
        disabled={(disabled || handling) as boolean}
        className={buttonIconVariants({
          shape,
          variant,
          size,
          state,
          disabled,
          handling,
          className: cx(
            {
              "opacity-50 pointer-events-none cursor-not-allowed": disabled,
              "pointer-events-none": handling,
            },
            className,
          ),
        })}
        {...props}
      >
        <Icon
          svg={SvgComponent}
          animate={isHandling}
          className={buttonIconSvgVariants({ size })}
        />
      </button>
    );
  },
);

export default ButtonIcon;
