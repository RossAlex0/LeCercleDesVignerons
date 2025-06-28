import type { WineDomain } from "@/utils/data";

export type WineDomainModalProps = {
  domain: WineDomain;
  onClose: () => void;
};
