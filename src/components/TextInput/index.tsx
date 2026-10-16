import cx from "classnames";
import type { ChangeEvent, ComponentProps, FocusEvent } from "react";
import { forwardRef, useState } from "react";
import type { VariantProps } from "tailwind-variants";
import UserIcon from "../../assets/icons/user-rectangle.svg?react";
import Icon from "../Icon";
import {
  textInputFieldVariants,
  textInputIconVariants,
  textInputVariants,
} from "./textInputVariants";

export type TextInputState =
  | "empty-default"
  | "empty-active"
  | "filled-default"
  | "filled-active";

export interface TextInputProps
  extends
    Omit<ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof textInputVariants> {
  icon?: ComponentProps<typeof Icon>["svg"];
  inputClassName?: string;
  state?: TextInputState;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      active,
      filled,
      disabled,
      state,
      className,
      inputClassName,
      icon = UserIcon,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      type = "text",
      ...props
    },
    ref,
  ) {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(
      String(defaultValue ?? ""),
    );
    const [isFocused, setIsFocused] = useState(false);

    const currentValue = isControlled ? String(value ?? "") : internalValue;
    const isValueFilled = currentValue.length > 0;

    const computedActive = active ?? isFocused;
    const computedFilled = filled ?? isValueFilled;

    const computedState: TextInputState =
      state ??
      (computedFilled
        ? computedActive
          ? "filled-active"
          : "filled-default"
        : computedActive
          ? "empty-active"
          : "empty-default");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={textInputVariants({
          active: computedActive,
          filled: computedFilled,
          state: computedState,
          disabled,
          className: cx(
            {
              "opacity-50 pointer-events-none cursor-not-allowed": disabled,
            },
            className,
          ),
        })}
      >
        {icon && (
          <Icon
            svg={icon}
            className={textInputIconVariants({
              active: computedActive,
              filled: computedFilled,
              state: computedState,
            })}
          />
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled as boolean}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cx(
            textInputFieldVariants({
              active: computedActive,
              filled: computedFilled,
              state: computedState,
            }),
            inputClassName,
          )}
          {...props}
        />
      </div>
    );
  },
);

export default TextInput;
