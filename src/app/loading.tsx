"use client";
import { motion } from "framer-motion";

import "@/styles/loading.css";

export default function Loading() {
  return (
    <motion.div
      className="flex_column_center_center loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="loader_circle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p>Chargement en cours...</p>
    </motion.div>
  );
}
