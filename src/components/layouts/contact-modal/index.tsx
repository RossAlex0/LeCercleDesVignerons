import { motion, AnimatePresence } from "framer-motion";

import "./contact-modal.css";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function ModalContact({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const isDisabled =
    !!form.name && !!form.subject && !!form.message && !!form.email;
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
            <h2 className="input_title">Ecrivez-nous !</h2>
            <div className="input_container">
              <div className="half_input">
                <Input
                  stateTools={{
                    state: form.name,
                    setState: (value) => setForm({ ...form, name: value }),
                  }}
                  half
                  placeholder="Nom / Prénom"
                />
                <Input
                  stateTools={{
                    state: form.email,
                    setState: (value) => setForm({ ...form, email: value }),
                  }}
                  half
                  placeholder="Mail"
                />
              </div>
              <Input
                stateTools={{
                  state: form.subject,
                  setState: (value) => setForm({ ...form, subject: value }),
                }}
                placeholder="Objet"
              />
              <Input
                stateTools={{
                  state: form.message,
                  setState: (value) => setForm({ ...form, message: value }),
                }}
                area
                placeholder="Message"
              />
            </div>
            <div className="modal_button">
              <Button
                disabled={!isDisabled}
                style={!isDisabled ? { opacity: "0.4" } : { opacity: "1" }}
              >
                Envoyer
              </Button>
              <Button
                style={{
                  backgroundColor: "#121111",
                  border: "1px solid #b6935e",
                }}
                onClick={() => setIsOpen(false)}
              >
                Fermer
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
