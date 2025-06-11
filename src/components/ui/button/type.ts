import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export type MotionButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
};
