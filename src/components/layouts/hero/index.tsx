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
  console.info(width);
  return (
    <section className="home flex_column_center_center" id="acceuil">
      <div className="home_container flex_column_center_center">
        {width && width < 1280 ? (
          <Image
            src="/logo/white_logo.svg"
            alt="winebottle"
            width={360}
            height={216}
            loading="lazy"
          />
        ) : (
          <Image
            src="/logo/white_logo_without_text.webp"
            alt="winebottle"
            width={200}
            height={196}
            loading="lazy"
          />
        )}
        <h2 className="home_title">
          Savourez l&apos;authenticité <br />
          et la richesse des grands vins.
        </h2>
        <div className="home_button">
          <Button>Grille Tarrifaire</Button>
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
      <ModalContact isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
