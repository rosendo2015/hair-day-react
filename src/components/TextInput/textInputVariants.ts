import { tv } from "tailwind-variants";

export const textInputVariants = tv({
  base: "flex items-center gap-3 w-full rounded-lg border border-solid bg-transparent px-3 py-2.5 transition-colors duration-200",
  variants: {
    active: {
      true: "border-[var(--yellow)]",
      false: "border-[var(--gray-500)]",
    },
    filled: {
      true: "",
      false: "",
    },
    state: {
      "empty-default": "border-[var(--gray-500)]",
      "empty-active": "border-[var(--yellow)]",
      "filled-default": "border-[var(--gray-500)]",
      "filled-active": "border-[var(--yellow)]",
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
    },
  },
  defaultVariants: {
    active: false,
    filled: false,
    disabled: false,
  },
});

export const textInputFieldVariants = tv({
  base: "w-full bg-transparent outline-none font-normal text-base placeholder:text-[var(--gray-400)] transition-colors duration-200",
  variants: {
    active: {
      true: "text-white",
      false: "text-[var(--gray-200)]",
    },
    filled: {
      true: "text-white",
      false: "text-[var(--gray-400)]",
    },
    state: {
      "empty-default": "text-[var(--gray-400)]",
      "empty-active": "text-white",
      "filled-default": "text-[var(--gray-200)]",
      "filled-active": "text-white",
    },
  },
  compoundVariants: [
    {
      active: false,
      filled: false,
      className: "text-[var(--gray-400)]",
    },
    {
      active: true,
      filled: false,
      className: "text-white",
    },
    {
      active: false,
      filled: true,
      className: "text-[var(--gray-200)]",
    },
    {
      active: true,
      filled: true,
      className: "text-white",
    },
  ],
  defaultVariants: {
    active: false,
    filled: false,
  },
});

export const textInputIconVariants = tv({
  base: "w-5 h-5 shrink-0 transition-colors duration-200",
  variants: {
    active: {
      true: "fill-[var(--yellow)] text-[var(--yellow)]",
      false: "fill-[var(--gray-400)] text-[var(--gray-400)]",
    },
    filled: {
      true: "",
      false: "",
    },
    state: {
      "empty-default": "fill-[var(--gray-400)] text-[var(--gray-400)]",
      "empty-active": "fill-[var(--yellow)] text-[var(--yellow)]",
      "filled-default": "fill-[var(--gray-400)] text-[var(--gray-400)]",
      "filled-active": "fill-[var(--yellow)] text-[var(--yellow)]",
    },
  },
  defaultVariants: {
    active: false,
    filled: false,
  },
});

