"use client";

import React from "react";
import Button from "@/components/ui/button";
import WineList from "@/components/blocks/wine-list";
import Input from "@/components/ui/input";
import { useGetWinePrices } from "@/utils/custom-hook/useGetWinePrices";
import { CirclePlus, Download, RotateCcw, Search, Wine } from "lucide-react";
import { useRouter } from "next/navigation";
import { headersCatalog } from "@/utils/globals-variable/catalog";
import Loading from "../loading";
import FilterModal from "@/components/layouts/filter-modal";

import "./catalog.css";
import { WineData } from "@/utils/custom-hook/useGetWinePrices/type";
import { FormValues } from "./type";

export default function CatalogWine() {
  const router = useRouter();

  const { isLoad, getData, filterData, downloadWineDocs } = useGetWinePrices();
  const [open, setOpen] = React.useState<boolean>(false);
  const [productName, setProductName] = React.useState<string | null>(null);
  const [dataFiltered, setDataFiltered] = React.useState<
    WineData[] | undefined
  >();
  const [productValues, setProductValues] = React.useState<FormValues>({
    region: null,
    price: null,
    millesime: null,
    volume: null,
  });

  const wineData = React.useMemo(() => {
    if (isLoad) {
      return getData();
    }
  }, [isLoad]);

  // Get values from data to input filter

  const millesimes = React.useMemo(
    () =>
      Array.from(
        new Set(
          wineData
            ?.map((wine) => Number(wine.millesime))
            .filter((year) => !isNaN(year))
        )
      ),
    [wineData]
  );

  const volumes = React.useMemo(
    () =>
      Array.from(
        new Set(
          wineData?.map((wine) => wine.volume.replace(/\s+/g, "").toUpperCase())
        )
      ),
    [wineData]
  );

  const prices = React.useMemo(
    () =>
      Array.from(
        new Set(
          wineData
            ?.map((wine) => Number(wine.price))
            .filter((year) => !isNaN(year))
        )
      ),
    [wineData]
  );

  const origines = React.useMemo(() => {
    const arr = Array.from(
      new Set(wineData?.map((wine) => wine.origin).filter(Boolean))
    );
    return arr.length > 0 ? arr : undefined;
  }, [wineData]);

  const searchProductByInputValues = () => {
    if (
      !productValues.millesime &&
      !productValues.price &&
      !productValues.region &&
      !productValues.volume
    ) {
      if (productName) {
        const dataFilteredWithName = filterData(productName);

        setDataFiltered(dataFilteredWithName);
        return;
      }
      return;
    }

    if (productName) {
      const dataFilteredWithAllValues = filterData(productName, productValues);

      setDataFiltered(dataFilteredWithAllValues);
      return;
    }

    const dataFiltered = filterData(undefined, productValues);

    setDataFiltered(dataFiltered);
  };

  const resetData = () => {
    setProductName(null);
    setProductValues({
      region: undefined,
      price: undefined,
      millesime: undefined,
      volume: undefined,
    });
    setDataFiltered(wineData);
  };
  // Styles

  const buttonStyle = {
    padding: "0.5rem 0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (!isLoad || !wineData) {
    return <Loading />;
  }

  return (
    <section className="catalog_container flex_column_center ">
      <div className="catalog_header flex_row_center_center">
        <Button
          onClick={() => router.push("/")}
          style={{
            position: "absolute",
            left: 0,
            fontWeight: "bold",
            paddingInline: "1rem",
          }}
        >
          Retour à l’accueil
        </Button>
        <h2 className="flex_row_center_center catalog_title">
          <Wine size={42} style={{ marginRight: 12 }} /> NOS VINS
        </h2>
      </div>
      <div className="list_input flex_row">
        <div>
          <Input
            placeholder="Rechercher un produit"
            stateTools={{ state: productName, setState: setProductName }}
          />
        </div>
        <Button
          style={buttonStyle}
          onClick={() => searchProductByInputValues()}
        >
          <Search />
        </Button>
        <Button style={buttonStyle} onClick={() => setOpen(!open)}>
          <CirclePlus />
        </Button>
        <Button style={buttonStyle} onClick={resetData}>
          <RotateCcw />
        </Button>
        <Button
          style={{ ...buttonStyle, marginLeft: "auto" }}
          onClick={downloadWineDocs}
        >
          <Download />
        </Button>
      </div>
      <div className="list_tab flex_column">
        <div className="flex_row">
          {headersCatalog.map((header) => (
            <div
              className={`column_header width_${header.replace(/ /g, "_")}`}
              key={header}
            >
              <p>{header}</p>
            </div>
          ))}
        </div>
        <div className="flex_row" style={{ overflow: "scroll" }}>
          <WineList wines={dataFiltered ?? wineData} />
        </div>
      </div>
      {open ? (
        <FilterModal
          setOpen={setOpen}
          origines={origines}
          volumes={volumes}
          millesimes={millesimes}
          prices={prices}
          values={productValues}
          setter={setProductValues}
          searchWine={searchProductByInputValues}
        />
      ) : undefined}
    </section>
  );
}
