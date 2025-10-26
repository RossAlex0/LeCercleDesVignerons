"use client";

import { WineData } from "./type";

export const parseTarifData = (data: string[][]): WineData[] => {
  const b = data[0].length;

  const dataParsed: WineData[] = [];

  let objectModel: WineData | object = {};

  for (let a = 0; a <= b; a++) {
    const fieldName = data[0][a];

    if (!fieldName) continue;

    objectModel = { ...objectModel, [fieldName]: "" };
  }
  data.forEach((da, index) => {
    if (index !== 0) {
      const currentObject = { ...objectModel } as WineData;

      currentObject.product_name = checkValue(da[0]);
      currentObject.quantity = checkValue(da[1]);
      currentObject.millesime = checkValue(da[2]);
      currentObject.cbo = checkValue(da[3]);
      currentObject.volume = checkValue(da[4]).split(" ").join("");
      currentObject.price = checkValue(da[5]);
      currentObject.origin = checkValue(da[6]);

      dataParsed.push(currentObject);
    }
  });

  return dataParsed;
};

export const checkValue = (value: string | null | undefined): string => {
  if (value && value !== "") return value;

  return "-";
};
