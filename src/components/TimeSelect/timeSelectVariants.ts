import { tv } from "tailwind-variants";

export const timeSelectVariants = tv({
  base: "flex items-center justify-center rounded-lg border border-solid px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer outline-none select-none min-w-[72px] text-center",
  variants: {
    state: {
      default:
        "bg-transparent border-[var(--gray-600)] text-[var(--gray-200)] hover:border-[var(--yellow)] hover:text-white",
      hover: "bg-transparent border-[var(--yellow)] text-white",
      selected:
        "bg-[var(--yellow)] border-[var(--yellow)] text-[var(--gray-900)] font-bold shadow-sm",
      disabled:
        "bg-[var(--gray-800)] border-[var(--gray-700)] text-[var(--gray-500)] opacity-40 cursor-not-allowed pointer-events-none",
    },
    selected: {
      true: "bg-[var(--yellow)] border-[var(--yellow)] text-[var(--gray-900)] font-bold shadow-sm",
      false: "",
    },
    disabled: {
      true: "bg-[var(--gray-800)] border-[var(--gray-700)] text-[var(--gray-500)] opacity-40 cursor-not-allowed pointer-events-none",
      false: "",
    },
  },
  defaultVariants: {
    state: "default",
    selected: false,
    disabled: false,
  },
});

