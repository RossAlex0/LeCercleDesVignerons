import Slider from "@mui/material/Slider";
import Input from "@/components/ui/input";
import React from "react";

import "./slider-block.css";
import { FormValues } from "@/app/catalog/type";

type SliderBlockProps = {
  max: number;
  min: number;
  label: string;
  keyFilter: keyof FormValues;
  values?: number | number[] | null;

  setValue: React.Dispatch<React.SetStateAction<FormValues>>;
};

export default function SliderBlock({
  min,
  max,
  label,
  keyFilter,
  values,
  setValue,
}: SliderBlockProps) {
  const defaultValue = React.useMemo(() => {
    if (values && Array.isArray(values)) {
      return [values[0], values[1]];
    }
    return [min, max];
  }, [values]);

  const [sliderValues, setSliderValues] =
    React.useState<number[]>(defaultValue);

  const [uniqueSliderValue, setUniqueSliderValue] = React.useState<
    number | undefined
  >();

  React.useEffect(() => {
    if (label.includes("millésime") && uniqueSliderValue !== undefined) {
      setValue((prev) => ({ ...prev, [keyFilter]: uniqueSliderValue }));
    } else {
      setValue((prev) => ({ ...prev, [keyFilter]: sliderValues }));
    }
  }, [sliderValues, uniqueSliderValue, keyFilter, label, setValue]);

  return (
    <div className="slider_container flex_column">
      <label className="slider_label">{label}</label>
      <Slider
        getAriaLabel={() => "Price range"}
        value={sliderValues}
        onChange={(_, value) => setSliderValues(value)}
        valueLabelDisplay="off"
        getAriaValueText={(value: number) => `${value} E`}
        min={min}
        max={max}
      />
      <div className="input_slider_number flex_row_center_center">
        <Input
          type="number"
          placeholder="MIN"
          value={sliderValues[0]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSliderValues([parseInt(e.target.value), sliderValues[1]])
          }
        />
        {label.includes("millésime") ? (
          <Input
            type="number"
            value={values && !Array.isArray(values) ? values : undefined}
            placeholder="Année"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUniqueSliderValue(parseInt(e.target.value))
            }
          />
        ) : undefined}
        <Input
          type="number"
          placeholder="MAX"
          value={sliderValues[1]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSliderValues([sliderValues[0], parseInt(e.target.value)])
          }
        />
      </div>
    </div>
  );
}
