import type { CSSProperties, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | " reset";
  disabled?: boolean;
  loading?: boolean;
}
