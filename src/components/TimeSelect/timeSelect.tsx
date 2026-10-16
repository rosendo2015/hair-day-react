import cx from "classnames";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { timeSelectVariants } from "./timeSelectVariants";

export type TimeSelectState = "default" | "hover" | "selected" | "disabled";

export interface TimeSelectProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof timeSelectVariants> {
  time: string;
  state?: TimeSelectState;
  selected?: boolean;
}

export const TimeSelect = forwardRef<HTMLButtonElement, TimeSelectProps>(
  function TimeSelect(
    {
      time,
      state,
      selected = false,
      disabled = false,
      className,
      type = "button",
      children,
      ...props
    },
    ref,
  ) {
    const isActuallyDisabled = Boolean(disabled || state === "disabled");
    const isActuallySelected = Boolean(selected || state === "selected");

    const computedState: TimeSelectState =
      state ??
      (isActuallyDisabled
        ? "disabled"
        : isActuallySelected
          ? "selected"
          : "default");

    return (
      <button
        ref={ref}
        type={type}
        disabled={isActuallyDisabled}
        aria-pressed={isActuallySelected}
        className={timeSelectVariants({
          state: computedState,
          selected: isActuallySelected,
          disabled: isActuallyDisabled,
          className: cx(className),
        })}
        {...props}
      >
        {children ?? time}
      </button>
    );
  },
);

export default TimeSelect;
