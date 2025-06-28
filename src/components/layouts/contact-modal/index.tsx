import { motion, AnimatePresence } from "framer-motion";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { EmailBody } from "@/utils/custom-hook/usePostMail/type";
import React from "react";
import {
  isValidEmailValues,
  resetFormState,
  upMessageInfoWithDelay,
} from "./utils";
import { MailCheck, MailX } from "lucide-react";
import usePostMail from "@/utils/custom-hook/usePostMail";

import "./contact-modal.css";

export default function ModalContact({ onClose }: { onClose: () => void }) {
  const [form, setForm] = React.useState<EmailBody>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [responseStatus, setResponseStatus] = React.useState<
    string | undefined
  >();

  const postMail = usePostMail();

  const handleClickToSend = async () => {
    if (!isValidEmailValues(form)) {
      upMessageInfoWithDelay("error", setResponseStatus, onClose);
      return;
    }

    const response = await postMail(form);

    if (
      !response ||
      Object.keys(response).includes("error") ||
      Object.keys(response).includes("errorMessage")
    ) {
      upMessageInfoWithDelay("error", setResponseStatus, onClose);
    } else {
      upMessageInfoWithDelay("succes", setResponseStatus, onClose);
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
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        className="contact_container flex_row_center_center"
        onClick={onClose}
      >
        <motion.div
          className="contact_block flex_column_between_center"
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
          <div className="input_container flex_column_center">
            <div className="half_input flex_row">
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
          <div className="modal_button flex_row">
            <Button
              style={{
                backgroundColor: "#121111",
                border: "1px solid #b6935e",
              }}
              onClick={onClose}
            >
              Fermer
            </Button>
            <Button
              disabled={!isDisabled}
              style={!isDisabled ? { opacity: "0.4" } : { opacity: "1" }}
              onClick={handleClickToSend}
            >
              Envoyer
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
