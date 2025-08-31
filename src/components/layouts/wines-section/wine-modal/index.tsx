import { X, MapPin, Thermometer, Amphora, MountainSnow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";
import type { WineDomainModalProps } from "./type";

import "./wine-modal.css";

export default function WineModal({ domain, onClose }: WineDomainModalProps) {
  const handleClickButtonPrices = () => {
    const fileUrl = window.location.origin + "/DOC_TARIF_07082025.xlsx";
    window.open(
      "https://view.officeapps.live.com/op/embed.aspx?src=" + fileUrl,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="wine_modal_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="wine_modal"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wine_wrapper">
            <div className="wine_image_wrapper">
              <motion.img
                src={domain.image}
                alt={domain.name}
                className="wine_image"
              />
              <div className="wine_gradient"></div>
            </div>

            <div className="wine_modal_content">
              <div className="wine_modal_header">
                <div className="wine_modal_title">
                  <div>
                    <h2 className="wine_modal_name">{domain.name}</h2>
                    <div className="wine_modal_region">
                      <MapPin className="wine_modal_icon" />
                      <p className="wine_modal_position">
                        {domain.country_position}
                      </p>
                    </div>
                  </div>
                </div>
                <button onClick={onClose} className="closeBtn">
                  <X className="wine_modal_icon" />
                </button>
              </div>

              <p className="wine_modal_description">{domain.fullDescription}</p>

              <div className="wine_modal_stats flex_column">
                <div>
                  <div className="wine_modal_label">
                    <Thermometer
                      className="wine_modal_icon"
                      style={{ marginLeft: "-6px" }}
                    />
                    <span>Climat</span>
                  </div>
                  <p className="statValue">{domain.climat}</p>
                </div>
                <div>
                  <div className="wine_modal_label">
                    <Amphora
                      className="wine_modal_icon"
                      style={{ marginLeft: "-4px" }}
                    />
                    <span>Style</span>
                  </div>
                  <p className="statValue">{domain.wine_style}</p>
                </div>
              </div>
              <div className="wine_modal_section flex_column_center_center">
                <div className="wine_modal_terre flex_column">
                  <div className="wine_modal_label">
                    <MountainSnow className="wine_modal_icon" />
                    <span>Térroir</span>
                  </div>
                  <div className="wine_badges">
                    {domain.terroirs.map((terroir, index) => (
                      <span key={index} className="wine_badge">
                        {terroir}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="wine_modal_button flex_row_center">
                  <Button onClick={handleClickButtonPrices}>
                    Grille Tarrifaire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
