"use client";

import React from "react";
import { parseTarifData } from "./utils";
import { WineData } from "./type";
import { FormValues } from "@/app/catalog/type";
import { LOCAL_DATA_CERCLE_VIGNERONS } from "@/utils/globals-variable/catalog";

const SHEET_API_KEY = process.env.NEXT_PUBLIC_SHEET_API_KEY as string;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID as string;

export function useGetWinePrices() {
  const [winePrice, setWinePrice] = React.useState<string[][] | undefined>();
  const [isLoad, setIsLoad] = React.useState<boolean>(false);

  React.useEffect(() => {
    const savedData = sessionStorage.getItem(LOCAL_DATA_CERCLE_VIGNERONS);
    if (savedData) {
      setWinePrice(JSON.parse(savedData));
      setIsLoad(true);
      return;
    }

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Doc_Tarif_Cercle_Vignerons?key=${SHEET_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.info("SOURCE/", data);

        setWinePrice(data.values);
        sessionStorage.setItem(
          LOCAL_DATA_CERCLE_VIGNERONS,
          JSON.stringify(data.values)
        );
        setIsLoad(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const getData = (): WineData[] => {
    if (winePrice) {
      const dataParsed = parseTarifData(winePrice);
      return dataParsed;
    }
    return [];
  };

  const filterData = (productName?: string, objectFilter?: FormValues) => {
    if (!winePrice) return [];

    let dataParsed = parseTarifData(winePrice);

    if (productName && productName !== "") {
      dataParsed = dataParsed.filter((wine) =>
        wine.product_name.toLowerCase().includes(productName.toLowerCase())
      );
    }

    if (objectFilter) {
      const { region, millesime, price, volume } = objectFilter;

      if (price && Array.isArray(price)) {
        dataParsed = dataParsed.filter(
          (wine) =>
            parseInt(wine.price) >= price[0] && parseInt(wine.price) <= price[1]
        );
      }

      if (millesime) {
        if (Array.isArray(millesime)) {
          dataParsed = dataParsed.filter(
            (wine) =>
              parseInt(wine.millesime) >= millesime[0] &&
              parseInt(wine.millesime) <= millesime[1]
          );
        } else {
          dataParsed = dataParsed.filter(
            (wine) => parseInt(wine.millesime) === millesime
          );
        }
      }

      if (region)
        dataParsed = dataParsed.filter((wine) =>
          wine.origin.toLowerCase().includes(region.toLowerCase())
        );

      if (volume)
        dataParsed = dataParsed.filter((wine) => wine.volume === volume);
    }
    return dataParsed;
  };

  const downloadWineDocs = () => {
    const fileUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=xlsx`;
    window.open(fileUrl, "_blank");
  };

  return { getData, isLoad, filterData, downloadWineDocs };
}
