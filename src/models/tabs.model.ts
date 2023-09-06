export interface Tabs {
  readonly orderSide: string;
  readonly handleOrderSideBtn: (e: string) => void;
  readonly className?: string;
  readonly tabs: string[];
}
