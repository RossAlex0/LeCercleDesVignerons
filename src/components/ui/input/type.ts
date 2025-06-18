import { HTMLMotionProps } from "framer-motion";

export type InputProps = (
  | HTMLMotionProps<"input">
  | HTMLMotionProps<"textarea">
) & {
  stateTools?: { state: string; setState: (state: string) => void };
  area?: boolean;
  half?: boolean;
  type?: React.HTMLInputTypeAttribute;
};
