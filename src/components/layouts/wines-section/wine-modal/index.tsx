import { X, Wine, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { WineDomain } from "@/utils/data/regionData";
import "./wine-modal.css";

interface WineDomainModalProps {
  domain: WineDomain;
  onClose: () => void;
}

export default function WineModal({ domain, onClose }: WineDomainModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="wine_modal_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="wine_modal"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
                  <Wine className="wine_modal_icon" />
                  <div>
                    <h2 className="wine_modal_name">{domain.name}</h2>
                    <div className="wine_modal_region">
                      <MapPin className="wine_modal_icon" />
                      <span>{domain.region}</span>
                    </div>
                  </div>
                </div>
                <button onClick={onClose} className="closeBtn">
                  <X className="wine_modal_icon" />
                </button>
              </div>

              <p className="wine_modal_description">{domain.fullDescription}</p>

              <div className="wine_modal_stats">
                <div>
                  <div className="wine_modal_label">
                    <Calendar className="wine_modal_icon" />
                    <span>Établi en</span>
                  </div>
                  <p className="statValue">{domain.established}</p>
                </div>
                <div>
                  <span className="wine_modal_label">Superficie</span>
                  <p className="statValue">{domain.hectares} hectares</p>
                </div>
              </div>

              <div className="wine_modal_section">
                <h3 className="sectionTitle">Spécialités</h3>
                <div className="badges">
                  {domain.specialties.map((s, i) => (
                    <span key={i} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {domain.awards && domain.awards.length > 0 && (
                <div className="wine_modal_section">
                  <h3 className="sectionTitle">Distinctions</h3>
                  <div className="awards">
                    {domain.awards?.map((award, i) => (
                      <div key={i} className="award">
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
