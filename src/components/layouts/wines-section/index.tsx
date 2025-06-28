import { WineDomain, wineDomains } from "@/utils/data";
import WineCard from "@/components/blocks/card/wine-card";
import React from "react";
import WineModal from "./wine-modal";

import "./wineSection.css";
import { Grape } from "lucide-react";
import SectionHeader from "@/components/blocks/section-header";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

export default function WineSection() {
  const { width } = useWindowSize();
  const [selectedDomain, setSelectedDomain] = React.useState<WineDomain | null>(
    null
  );

  const isMobile = width && width < 480;

  const reponsiveClassName = React.useMemo(
    () => (isMobile ? "flex_column_center_center" : "flex_row_between"),
    [isMobile]
  );

  const title = React.useMemo(
    () => (isMobile ? "Vins & Régions" : "Nos Vins & Leurs Régions"),
    [isMobile]
  );

  return (
    <section className="product_container flex_column" id="wine_section">
      <SectionHeader Icon={Grape} title={title}>
        Parcourez les grandes régions viticoles françaises et explorez ce qui
        fait la singularité de chacune
        {isMobile
          ? "."
          : ": leurs cépages, leurs traditions, leurs sols et les vins d’exception qui en sont issus."}
      </SectionHeader>
      <div className={`product_card_container ${reponsiveClassName}`}>
        {wineDomains.map((wine, index) => (
          <WineCard
            domain={wine}
            index={index}
            key={wine.id}
            onClick={() => setSelectedDomain(wine)}
          />
        ))}
        {selectedDomain ? (
          <WineModal
            domain={selectedDomain}
            onClose={() => setSelectedDomain(null)}
          />
        ) : undefined}
      </div>
    </section>
  );
}
