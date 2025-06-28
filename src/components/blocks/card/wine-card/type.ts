import type { WineDomain } from "@/utils/data";

export type WineDomainCardProps = {
  domain: WineDomain;
  index: number;
  onClick: () => void;
};
