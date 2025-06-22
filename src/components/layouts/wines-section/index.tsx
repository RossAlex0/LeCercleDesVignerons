import { WineDomain, wineDomains } from "@/utils/data";
import WineCard from "@/components/blocks/card/wine-card";
import React from "react";
import WineModal from "./wine-modal";

import "./wineSection.css";
import { Grape } from "lucide-react";
import SectionHeader from "@/components/blocks/section-header";

export default function WineSection() {
  const [selectedDomain, setSelectedDomain] = React.useState<WineDomain | null>(
    null
  );

  return (
    <section className="product_container flex_column" id="wine_section">
      <SectionHeader Icon={Grape} title="Nos Vins & Leurs Régions">
        Parcourez les grandes régions viticoles françaises et explorez ce qui
        fait la singularité de chacune : leurs cépages, leurs traditions, leurs
        sols et les vins d’exception qui en sont issus.
      </SectionHeader>
      <div className="product_card_container flex_row_between">
        {wineDomains.map((wine, index) => (
          <WineCard
            domain={wine}
            index={index}
            key={wine.id}
            onClick={() => setSelectedDomain(wine)}
          />
        ))}
        {selectedDomain && (
          <WineModal
            domain={selectedDomain}
            onClose={() => setSelectedDomain(null)}
          />
        )}
      </div>
    </section>
  );
}
