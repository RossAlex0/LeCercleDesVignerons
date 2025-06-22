import React from "react";
import { SectionHeaderProps } from "./type";

import "./section-header.css";

export default function SectionHeader({
  Icon,
  title,
  children,
}: SectionHeaderProps) {
  return (
    <div className="header_section_container flex_column_center_center">
      <h2 className="header_section_title flex_row_center_center">
        <Icon size={48} color="#b6935e" />
        {title}
      </h2>
      <p className="header_section_desc">{children}</p>
    </div>
  );
}
