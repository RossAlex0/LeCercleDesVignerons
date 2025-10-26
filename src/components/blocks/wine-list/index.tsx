import type { WineData } from "@/utils/custom-hook/useGetWinePrices/type";
import WinesColumn from "./wine-column";
import React from "react";

import "./wine-list.css";

export default function WineList({ wines }: { wines: WineData[] }) {
  const headerMap: Record<keyof WineData | "total_value", string> = {
    cbo: "CBO",
    product_name: "Produit",
    millesime: "Millésime",
    origin: "Origine",
    volume: "Volume",
    price: "Prix unitaire",
    quantity: "Stock",
    total_value: "Valeur totale",
  };

  const headersOrder = [
    "cbo",
    "product_name",
    "millesime",
    "origin",
    "volume",
    "price",
    "quantity",
    "total_value",
  ] as const;

  return (
    <>
      {headersOrder.map((key) => {
        const values =
          key === "total_value"
            ? wines.map((wine) =>
                (
                  (Number(wine.price) || 0) * (Number(wine.quantity) || 0)
                ).toString()
              )
            : wines.map((wine) => wine[key]);

        return (
          <div
            key={key}
            className={`column_liste width_${headerMap[key].replace(
              / /g,
              "_"
            )}`}
          >
            <WinesColumn header={headerMap[key]} values={values} />
          </div>
        );
      })}
    </>
  );
}
