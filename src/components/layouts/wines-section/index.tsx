import { WineDomain, wineDomains } from "@/utils/data/regionData";
import "./wineSection.css";
import WineCard from "@/components/blocks/card";
import React from "react";
import WineModal from "./wine-modal";

export default function WineSection() {
  const [selectedDomain, setSelectedDomain] = React.useState<WineDomain | null>(
    null
  );

  return (
    <section className="product_container" id="wine_section">
      {wineDomains.map((wine) => (
        <WineCard
          domain={wine}
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
    </section>
  );
}
