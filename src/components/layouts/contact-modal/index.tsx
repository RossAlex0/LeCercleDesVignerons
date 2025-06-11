import { motion, AnimatePresence } from "framer-motion";

import "./contact-modal.css";
import Input from "@/components/ui/input";

export default function ModalContact({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="contact_container"
        >
          <motion.div
            className="contact_block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ma super modal 🍷</h2>
            <Input />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "1rem",
                backgroundColor: "#333",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
