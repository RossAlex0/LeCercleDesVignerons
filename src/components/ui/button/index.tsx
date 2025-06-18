import { motion } from "framer-motion";
import { MotionButtonProps } from "./type";

import "./button.css";

export default function Button({ children, ...props }: MotionButtonProps) {
  const isDisabled = props.disabled ?? false;

  return (
    <motion.button
      className="motion_button"
      type="button"
      whileHover={
        !isDisabled
          ? {
              scale: 1.05,
              boxShadow: "0 0 15px rgba(191,165,90,0.4)",
            }
          : undefined
      }
      transition={!isDisabled ? { type: "spring", stiffness: 300 } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
}
