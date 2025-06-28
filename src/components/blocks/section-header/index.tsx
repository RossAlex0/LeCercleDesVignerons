import React from "react";
import { SectionHeaderProps } from "./type";
import useWindowSize from "@/utils/custom-hook/useWindowWidth";

import "./section-header.css";

export default function SectionHeader({
  Icon,
  title,
  children,
}: SectionHeaderProps) {
  const { width } = useWindowSize();

  const isMobile = width && width < 480;
  return (
    <div className="header_section_container flex_column_center_center">
      <h2 className="header_section_title flex_row_center_center">
        <Icon size={isMobile ? 36 : 48} color="#b6935e" />
        {title}
      </h2>
      <p className="header_section_desc">{children}</p>
    </div>
  );
}
