import { motion, AnimatePresence } from "framer-motion";

import "./contact-modal.css";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { EmailBody } from "@/utils/form-request/type";
import { sendMail } from "@/utils/form-request";
import React from "react";
import {
  checkValuesOfEmail,
  resetFormState,
  upMessageInfoWithDelay,
} from "./utils";
import { MailCheck, MailX } from "lucide-react";

export default function ModalContact({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) {
  const [form, setForm] = React.useState<EmailBody>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [responseStatus, setResponseStatus] = React.useState<
    string | undefined
  >(undefined);

  const handleClickToSend = async () => {
    const isValidEmailValues = checkValuesOfEmail(form);

    if (!isValidEmailValues) {
      upMessageInfoWithDelay("error", setResponseStatus, setIsOpen);
      return;
    }

    const response = await sendMail(form);

    if (
      !response ||
      Object.keys(response).includes("error") ||
      Object.keys(response).includes("errorMessage")
    ) {
      upMessageInfoWithDelay("error", setResponseStatus, setIsOpen);
    } else {
      upMessageInfoWithDelay("succes", setResponseStatus, setIsOpen);
      setForm(resetFormState());
    }
  };
  const isDisabled =
    !!form.name && !!form.subject && !!form.message && !!form.email;

  const message = React.useMemo(
    () =>
      responseStatus === "error"
        ? "Erreur !"
        : responseStatus === "succes"
        ? "Message envoyé !"
        : "Ecrivez-nous !",
    [responseStatus]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.1, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="contact_container"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="contact_block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.7 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.h2
              className="input_title"
              key={message}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {message}{" "}
              {responseStatus === "error" ? (
                <MailX color="#9c6060" />
              ) : responseStatus === "succes" ? (
                <MailCheck color="#acffad" />
              ) : undefined}
            </motion.h2>
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
                onClick={handleClickToSend}
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
