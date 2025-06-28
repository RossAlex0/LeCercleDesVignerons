import React from "react";
import type {
  EmailBody,
  ResponseServer,
} from "@/utils/custom-hook/usePostMail/type";

export default function usePostMail() {
  const URL_SERVER = process.env.NEXT_PUBLIC_URL_SERVER as string;
  const URL_API_KEY = process.env.NEXT_PUBLIC_TOKEN_SERVER as string;

  return React.useCallback(
    async (emailBody: EmailBody): Promise<ResponseServer> => {
      return fetch(URL_SERVER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": URL_API_KEY,
        },
        body: JSON.stringify(emailBody),
      })
        .then((res) => res.json())
        .catch((err) => console.info(err));
    },
    []
  );
}
