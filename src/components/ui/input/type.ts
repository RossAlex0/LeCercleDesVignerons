import { HTMLMotionProps } from "framer-motion";

export type InputProps = (
  | HTMLMotionProps<"input">
  | HTMLMotionProps<"textarea">
) & {
  stateTools?: {
    state: string | null;
    setState: (state: string | null) => void;
  };
  area?: boolean;
  half?: boolean;
  type?: React.HTMLInputTypeAttribute;
};
