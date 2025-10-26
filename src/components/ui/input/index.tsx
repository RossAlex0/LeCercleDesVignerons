import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { InputProps } from "./type";

import "./input.css";

export default function Input({
  stateTools,
  half,
  area,
  type = "text",
  ...props
}: InputProps) {
  const style = half
    ? {
        width: "50%",
      }
    : { width: "100%" };

  return area ? (
    <motion.textarea
      value={stateTools?.state ?? ""}
      className={`input_area ${props.className}`}
      onChange={(event) => stateTools?.setState(event.target.value)}
      rows={4}
      whileFocus={{ scale: 1.02, border: "2px solid #b6935e" }}
      transition={{ duration: 0.2 }}
      style={style}
      {...(props as HTMLMotionProps<"textarea">)}
    />
  ) : (
    <motion.input
      className={`input_motion ${props.className}`}
      type={type}
      value={stateTools?.state ?? ""}
      onChange={(event) => stateTools?.setState(event.target.value)}
      whileFocus={{ scale: 1.02, border: "2px solid #b6935e" }}
      transition={{ duration: 0.2 }}
      {...(props as HTMLMotionProps<"input">)}
      style={style}
    />
  );
}
