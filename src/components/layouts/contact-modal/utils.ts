import type { EmailBody } from "@/utils/custom-hook/usePostMail/type";

export const resetFormState = (): EmailBody => ({
  name: "",
  subject: "",
  email: "",
  message: "",
});

export const upMessageInfoWithDelay = (
  status: "succes" | "error",
  setResponseStatus: (state: string | undefined) => void,
  onClose: () => void
): void => {
  setResponseStatus(status);

  setTimeout(() => {
    setResponseStatus(undefined);
    if (status === "succes") {
      onClose();
    }
  }, 4000);
};

export const isValidEmailValues = (emailForm: EmailBody): boolean => {
  const { name, subject, email, message } = emailForm;

  if (!name.trim() || !subject.trim() || !email.trim() || !message.trim()) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
};
