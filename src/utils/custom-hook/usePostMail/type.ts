export type EmailBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ResponseServer = {
  errorMessage?: string;
  message?: string;
  error?: string;
};
