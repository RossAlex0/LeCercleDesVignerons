import { coordinatesCDV } from "@/utils/data";
import React from "react";
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

import "./footer-contact.css";

export default function FooterContact() {
  const { width } = useWindowSize();

  const reponsiveClassName = React.useMemo(
    () =>
      width && width < 480
        ? "flex_column_center_center"
        : "flex_row_center_center",
    [width]
  );

  return (
    <section className="footer">
      <div className={`footer_infos ${reponsiveClassName}`}>
        <div className="footer_info_block flex_row_center_center">
          <MapPin className="footer_icon" /> <p>{coordinatesCDV.adress}</p>
        </div>
        <div className="footer_info_block flex_row_center_center">
          <Clock className="footer_icon" />
          <p>
            {coordinatesCDV.openingHour} - {coordinatesCDV.closingHour}
          </p>
        </div>
        <div className="footer_info_block flex_row_center_center">
          <Calendar className="footer_icon" />
          <p>
            {coordinatesCDV.openingDay} - {coordinatesCDV.closingDay}
          </p>
        </div>
      </div>
      <div className="footer_separator" />
      <div className={`footer_links ${reponsiveClassName}`}>
        <p>© 2025 Cercle Des Vignerons</p>
        <p>•</p>
        <div className="footer_policy flex_row_center_center">
          <a
            rel="legal"
            href="/mentionsLegalCercleDesVignerons.pdf"
            target="_blank"
          >
            Mentions légales
          </a>{" "}
          <ExternalLink size={12} />
        </div>
        <p>•</p>
        <div className="footer_policy flex_row_center_center">
          <a
            rel="privacy-policy"
            href="/Politique_de_confidentialite_Cercle_des_Vignerons.pdf"
            target="_blank"
          >
            Politique de confidentialité
          </a>
          <ExternalLink size={12} />
        </div>
      </div>
      <p className="footer_disclaimer">Tous droits réservés.</p>
      <div className="footer_disclaimer flex_row_center_center">
        <p>Site web réalisé par Rossignol Alex -</p>{" "}
        <a
          href="https://alex-rossignol.fr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Site
          <ExternalLink size={12} style={{ marginLeft: 4 }} />
        </a>
      </div>

      <p className="footer_disclaimer">
        L&apos;abus d&apos;alcool est dangereux pour la santé. <br />À consommer
        avec modération.
      </p>
    </section>
  );
}
