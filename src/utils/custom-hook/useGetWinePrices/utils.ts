"use client";

import { WineData } from "./type";

export const parseTarifData = (WineData: string[][]): WineData[] => {
  const b = WineData[0].length;

  const dataParsed: WineData[] = [];

  let objectModel: WineData | object = {};

  for (let a = 0; a <= b; a++) {
    const fieldName = WineData[0][a];

    if (!fieldName) continue;

    objectModel = { ...objectModel, [fieldName]: "" };
  }
  WineData.forEach((wine, index) => {
    if (index !== 0) {
      const currentObject = { ...objectModel } as WineData;

      currentObject.product_name = checkValue(wine[0]);
      currentObject.quantity = checkValue(wine[1]);
      currentObject.millesime = checkValue(wine[2]);
      currentObject.cbo = checkValue(wine[3]);
      currentObject.volume = checkValue(wine[5]).split(" ").join("");
      currentObject.price = checkValue(wine[6]);
      currentObject.origin = checkValue(wine[7]);

      if (currentObject.product_name !== "-") {
        dataParsed.push(currentObject);
      }
    }
  });

  return dataParsed;
};

export const checkValue = (value: string | null | undefined): string => {
  if (value && value !== "") return value;

  return "-";
};
