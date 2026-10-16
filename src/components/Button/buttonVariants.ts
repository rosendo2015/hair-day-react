import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: `
    flex items-center justify-center rounded-md transition-colors
    font-semibold cursor-pointer w-full h-12
  `,
  variants: {
    variant: {
      primary: `
        bg-[var(--yellow)] text-[var(--gray-900)]
        hover:bg-[var(--yellow-light)]
        disabled:bg-[var(--yellow-dark)] disabled:opacity-60
      `,
    },
    size: {
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "text-[var(--gray-900)] font-bold",
    },
    size: {
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
