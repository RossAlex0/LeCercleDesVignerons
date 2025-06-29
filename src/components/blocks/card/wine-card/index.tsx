import { Wine } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import type { WineDomainCardProps } from "./type";

import "./card.css";

export default function WineCard({
  domain,
  index,
  onClick,
}: WineDomainCardProps) {
  return (
    <motion.div
      className="card_container"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.6,
        scale: { duration: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
    >
      <div className="card_header">
        <motion.img
          src={domain.image}
          className="card_image"
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          alt={domain.name}
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
        <div className="card_appellations flex_column_center">
          <h4>Appellations</h4>
          <div className="appellation_text flex_row">
            {domain.appellations.map((appellation, index) => (
              <React.Fragment key={appellation}>
                {index === 0 ? "" : <>&nbsp;-&nbsp;</>}
                <p className="card_footer_text">{appellation}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="card_footer_separator" />
        <div className="card_varieties flex_row_center_center">
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
