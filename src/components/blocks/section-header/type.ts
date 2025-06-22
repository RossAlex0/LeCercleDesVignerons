import React from "react";
import { LucideProps } from "lucide-react";

export type SectionHeaderProps = {
  Icon: React.ForwardRefExoticComponent<LucideProps>;
  title: string;
  children: React.ReactNode;
};
