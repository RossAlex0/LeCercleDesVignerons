"use client";

import React from "react";
import { motion } from "framer-motion";
import useScrollSmoothToId from "@/utils/custom-hook/useScrollSmoothToId";
import useActiveSection from "@/utils/custom-hook/useActiveSection";

import "./nav-header.css";

export default function NavHeader() {
  const tabs = [
    { id: "accueil", label: "Accueil" },
    { id: "wine_section", label: "Vins" },
    { id: "about", label: "À Propos" },
  ];
  const [cursorStyle, setCursorStyle] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const scrollTo = useScrollSmoothToId();
  const activeSection = useActiveSection(tabs.map((tab) => tab.id));

  const tabRefs = React.useRef<HTMLLIElement[]>([]);

  React.useEffect(() => {
    const index = tabs.findIndex((tab) => tab.id === activeSection);
    const element = tabRefs.current[index];

    if (element) {
      setCursorStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeSection]);

  return (
    <ul
      className="nav_ul"
      onMouseLeave={() => {
        if (!activeSection) setCursorStyle((prev) => ({ ...prev, opacity: 0 }));
      }}
    >
      {tabs.map((tab, i) => (
        <li
          key={tab.id}
          ref={(element) => {
            if (element) tabRefs.current[i] = element;
          }}
          className="nav_li flex_row_center_center"
          onClick={() => scrollTo(tab.id)}
        >
          {tab.label}
        </li>
      ))}

      <motion.li animate={cursorStyle} className="nav_motion_li" />
    </ul>
  );
}
