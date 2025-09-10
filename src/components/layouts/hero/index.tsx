import Image from "next/image";
import Button from "@/components/ui/button";
import ArrowDown from "@/components/ui/arrow-down";
import ModalContact from "../contact-modal";
import React from "react";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

import "./hero.css";

export default function Hero() {
  const { width } = useWindowSize();

  const [isOpen, setIsOpen] = React.useState(false);

  const imageSize = React.useMemo(
    () =>
      width
        ? width > 1280
          ? { width: 390, height: 216 }
          : width < 480
          ? { width: 260, height: 186 }
          : { width: 490, height: 296 }
        : { width: 390, height: 216 },
    [width]
  );

  const handleClickButtonPrices = () => {
    const fileUrl = window.location.origin + "/DOC_TARIF_07082025.xlsx";
    window.open(
      "https://view.officeapps.live.com/op/embed.aspx?src=" + fileUrl,
      "_blank"
    );
  };

  return (
    <section className="home flex_column_center_center" id="accueil">
      <div className="home_container flex_column_center_center">
        <Image
          src="/logo/white_logo.svg"
          alt="winebottle"
          className="hero_logo"
          width={imageSize.width}
          height={imageSize.height}
          loading="lazy"
        />
        <h2 className="home_title">
          Savourez l&apos;authenticité <br />
          et la richesse des grands vins.
        </h2>
        <div className="home_button">
          <Button onClick={handleClickButtonPrices}>Grille Tarifaire</Button>
          <Button
            style={{
              backgroundColor: "transparent",
              backdropFilter: "blur(6px)",
              border: "1px solid #f5f5f5",
            }}
            onClick={() => setIsOpen(true)}
          >
            Nous contacter
          </Button>
        </div>
        <ArrowDown />
      </div>
      {isOpen ? <ModalContact onClose={() => setIsOpen(false)} /> : undefined}
    </section>
  );
}
