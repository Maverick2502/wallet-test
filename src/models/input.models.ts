import type { ChangeEvent } from "react";

export interface InputProps {
  value?: string;
  name?: string;
  readonly placeholder?: string;
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
  readonly lightBackgroundColor?: boolean;
  readonly disabled?: boolean;
}
