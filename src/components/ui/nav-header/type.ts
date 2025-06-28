export type TabProps = {
  children: React.ReactNode;
  setPosition: (state: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  refId: string;
  ref: React.Ref<HTMLLIElement>;
};
