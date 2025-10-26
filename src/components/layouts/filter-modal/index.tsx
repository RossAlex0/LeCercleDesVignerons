"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderBlock from "@/components/blocks/slider-inputs";
import Button from "@/components/ui/button";
import type { FormValues } from "@/app/catalog/type";

import "./filter-modal.css";

type FilterModalProps = {
  setOpen: (v: boolean) => void;
  origines?: string[];
  volumes: string[];
  millesimes: number[];
  prices: number[];
  values: FormValues;
  setter: React.Dispatch<React.SetStateAction<FormValues>>;
  searchWine: () => void;
};
export default function FilterModal({
  setOpen,
  origines,
  volumes,
  millesimes,
  prices,
  values,
  setter,
  searchWine,
}: FilterModalProps) {
  const onClickSearchWines = () => {
    searchWine();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        onClick={() => setOpen(false)}
        className="filter_container flex_row_center_center"
      >
        <motion.div
          className="filter_block flex_column_between_center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.7 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="select_container flex_row">
            <select
              id="origine-select"
              value={values.region ?? ""}
              onChange={(e) =>
                setter((prev) => ({ ...prev, region: e.target.value }))
              }
              className="select_filter"
              disabled={!!(origines && origines.length > 0)}
            >
              <option value="">Choix de région</option>
              {origines?.map((origine) => (
                <option key={origine} value={origine}>
                  {origine}
                </option>
              ))}
            </select>
            <div className="select_separator" />
            <select
              id="origine-select"
              value={values.volume ?? ""}
              onChange={(e) =>
                setter((prev) => ({ ...prev, volume: e.target.value }))
              }
              className="select_filter"
              disabled={!volumes}
            >
              <option value="">Choix du volume</option>
              {volumes?.map((volume) => (
                <option key={volume} value={volume}>
                  {volume}
                </option>
              ))}
            </select>
          </div>

          <SliderBlock
            min={Math.min(...prices)}
            max={Math.max(...prices)}
            label="Fourchette de prix"
            values={values.price}
            setValue={setter}
            keyFilter="price"
          />
          <SliderBlock
            min={Math.min(...millesimes)}
            max={Math.max(...millesimes)}
            label="Fourchette millésime"
            values={values.millesime}
            setValue={setter}
            keyFilter="millesime"
          />
          <Button onClick={onClickSearchWines}>Rechercher mes vins</Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
