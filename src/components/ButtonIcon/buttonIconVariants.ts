import { tv } from "tailwind-variants";

export const buttonIconVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition-colors duration-200 outline-none shrink-0 group",
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-lg",
    },
    variant: {
      ghost: "bg-transparent text-[var(--gray-400)] fill-[var(--gray-400)] hover:bg-[var(--gray-700)] hover:text-white hover:fill-white",
      destructive: "bg-transparent text-red-400 fill-red-400 hover:bg-red-500/10 hover:text-red-300 hover:fill-red-300",
      primary: "bg-[var(--yellow)] text-[var(--gray-900)] fill-[var(--gray-900)] hover:bg-[var(--yellow-light)]",
      secondary: "bg-[var(--gray-700)] text-[var(--gray-200)] fill-[var(--gray-200)] hover:bg-[var(--gray-600)] hover:text-white hover:fill-white",
    },
    size: {
      sm: "w-7 h-7 p-1.5",
      md: "w-9 h-9 p-2",
      lg: "w-10 h-10 p-2.5",
    },
    state: {
      default: "",
      hover: "",
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "",
    },
    handling: {
      true: "pointer-events-none",
      false: "",
    },
  },
  compoundVariants: [
    {
      state: "hover",
      variant: "ghost",
      className: "bg-[var(--gray-700)] text-white fill-white",
    },
    {
      state: "hover",
      variant: "destructive",
      className: "bg-red-500/10 text-red-300 fill-red-300",
    },
    {
      state: "hover",
      variant: "primary",
      className: "bg-[var(--yellow-light)]",
    },
    {
      state: "hover",
      variant: "secondary",
      className: "bg-[var(--gray-600)] text-white fill-white",
    },
  ],
  defaultVariants: {
    shape: "circle",
    variant: "ghost",
    size: "md",
    state: "default",
    disabled: false,
    handling: false,
  },
});

export const buttonIconSvgVariants = tv({
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

