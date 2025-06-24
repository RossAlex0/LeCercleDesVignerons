import { EmailBody } from "@/utils/custom-hook/usePostMail/type";

export const resetFormState = () => ({
  name: "",
  subject: "",
  email: "",
  message: "",
});

export const upMessageInfoWithDelay = (
  status: "succes" | "error",
  setResponseStatus: (state: string | undefined) => void,
  setIsOpen: (state: boolean) => void
): void => {
  setResponseStatus(status);

  setTimeout(() => {
    setResponseStatus(undefined);
    if (status === "succes") {
      setIsOpen(false);
    }
  }, 4000);
};

export const checkValuesOfEmail = (emailForm: EmailBody) => {
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
