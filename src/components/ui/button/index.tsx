import { motion } from "framer-motion";
import { MotionButtonProps } from "./type";

import "./button.css";

export default function Button({ children, ...props }: MotionButtonProps) {
  return (
    <motion.button
      className="motion_button"
      type="button"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(191,165,90,0.4)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
