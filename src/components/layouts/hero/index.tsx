"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import ArrowDown from "@/components/ui/arrow-down";
import ModalContact from "../contact-modal";
import React from "react";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";
import { useRouter } from "next/navigation";

import "./hero.css";
import { useGetWinePrices } from "@/utils/custom-hook/useGetWinePrices";
import { Download } from "lucide-react";

export default function Hero() {
  const { width } = useWindowSize();
  const { downloadWineDocs } = useGetWinePrices();

  const router = useRouter();

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

  const isMobileDevice = !!(width && width < 480);

  const handleClickButtonPrices = () => {
    if (isMobileDevice) {
      downloadWineDocs();
      return;
    }
    router.push("/catalog");
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
          <Button onClick={handleClickButtonPrices}>
            {isMobileDevice ? (
              <>
                <div className="flex_row_center_center">
                  <Download /> <p style={{ marginLeft: "0.5rem" }}>Tarifs</p>
                </div>
              </>
            ) : (
              "Tous les vins"
            )}
          </Button>
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
