import { coordinatesCDV, usersCDV } from "@/utils/data";
import React from "react";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
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
    <section className="footer" id="footer_contact">
      <div className={`footer_infos ${reponsiveClassName}`}>
        <div className="footer_info_block flex_row_center_center">
          <MapPin className="footer_icon" />{" "}
          <p>
            {coordinatesCDV.adress
              .replace(",", ",\n")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
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
        <div className="footer_info_block flex_row_center_center">
          <Phone className="footer_icon" />
          <div className="flex_column">
            {usersCDV.map((user, index) => (
              <a href={`tel:${user.phone}`} key={index}>
                {user.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_separator" />
      <div className={`footer_links ${reponsiveClassName}`}>
        <p>© 2025 Cercle Des Vignerons</p>
        <p>•</p>
        <a href="/mentionsLegalCercleDesVignerons.pdf" target="_blank">
          Mentions légales
        </a>
        <p>•</p>
        <a
          href="/Politique_de_confidentialite_Cercle_des_Vignerons.pdf"
          target="_blank"
        >
          Politique de confidentialité
        </a>
      </div>
      <p className="footer_disclaimer">Tous droits réservés.</p>
      <p className="footer_disclaimer">
        Site web réaliser par Rossignol Alex -{" "}
        <a
          href="https://alex-rossignol.fr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Site
        </a>
      </p>
      <p className="footer_disclaimer">
        L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec
        modération.
      </p>
    </section>
  );
}
