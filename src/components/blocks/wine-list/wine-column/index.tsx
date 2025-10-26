import { WineColumnProps } from "./type";

import "./wine-column.css";

export default function WinesColumn({ header, values }: WineColumnProps) {
  const pillsNumber = (value: string) => (
    <div className="pills_millesime">
      <p className={`value_${header.replace(/ /g, "_")}`}>{value}</p>
    </div>
  );

  return (
    <>
      {values.map((value, index) => (
        <div
          key={`${index}-${value}`}
          className={`column_value value_${header.replace(/ /g, "_")}`}
        >
          {header === "Stock" || header === "Millésime" ? (
            pillsNumber(value)
          ) : (
            <p>
              {value}
              {header === "Prix unitaire" || header === "Valeur totale"
                ? " €"
                : ""}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
