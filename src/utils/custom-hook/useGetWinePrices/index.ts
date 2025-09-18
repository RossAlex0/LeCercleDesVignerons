"use client";

import React from "react";

export default function useGetWinePrices() {
  const URL_SERVER = process.env.NEXT_PUBLIC_URL_SERVER as string;
  const URL_API_KEY = process.env.NEXT_PUBLIC_TOKEN_SERVER as string;

  const [winePricesData, setWinePricesData] = React.useState();
  const [isLoaded, setIsLoaded] = React.useState(false);

  const fetchWinePrices = React.useCallback(async () => {
    return fetch(`${URL_SERVER}/wine-prices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": URL_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.info(err));
  }, [URL_API_KEY, URL_SERVER]);

  const loader = async () => {
    if (!winePricesData) {
      const data = await fetchWinePrices();
      setIsLoaded(true);
      setWinePricesData(data);
    }
    setIsLoaded(false);
  };

  return { loader, isLoaded, winePricesData };
}
