import { tv } from "tailwind-variants";

export const iconVariants = tv({
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});
