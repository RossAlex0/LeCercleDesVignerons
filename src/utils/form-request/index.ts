import { EmailBody, ResponseServer } from "./type";

export const sendMail = (emailBody: EmailBody): Promise<ResponseServer> =>
  fetch(process.env.NEXT_PUBLIC_URL_SERVER as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_TOKEN_SERVER as string,
    },
    body: JSON.stringify(emailBody),
  })
    .then((res) => res.json())
    .catch((err) => console.info(err));
