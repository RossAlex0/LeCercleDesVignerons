import { Wine } from "lucide-react";
import { motion } from "framer-motion";
import type { WineDomain } from "@/utils/data/regionData";

import "./card.css";
import React from "react";

interface WineDomainCardProps {
  domain: WineDomain;
  onClick?: () => void;
}

export default function WineCard({ domain }: WineDomainCardProps) {
  return (
    <motion.div
      className="card_container"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card_header">
        <motion.img
          src={domain.image}
          className="card_image"
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="card_header_overlay" />
        <div className="card_header_title">
          <h2>
            {domain.name} <Wine />
          </h2>
          <p>{domain.description}</p>
        </div>
      </div>
      <div className="card_footer">
        <div className="card_appellations">
          <h4>Appellations</h4>
          <div className="appellation_text">
            {domain.appellations.map((appellation, index) => (
              <React.Fragment key={appellation}>
                {index === 0 ? "" : <>&nbsp;-&nbsp;</>}
                <motion.p
                  className="card_footer_text"
                  whileHover={{ scale: 1.01, color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  {appellation}
                </motion.p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="card_footer_separator" />
        <div className="card_varieties">
          {domain.varieties.map((variety) => (
            <React.Fragment key={variety}>
              <p className="card_variety_text" key={variety}>
                {variety}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
