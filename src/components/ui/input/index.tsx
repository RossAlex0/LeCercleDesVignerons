import { motion } from "framer-motion";

export default function Input() {
  return (
    <motion.input
      type="text"
      placeholder="Votre nom"
      whileFocus={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{
        padding: "10px 15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        outline: "none",
        fontSize: "1rem",
      }}
    />
  );
}
