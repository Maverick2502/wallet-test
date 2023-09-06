import type { ReactNode } from "react";

interface IsDisabledProps {
  condition: boolean | undefined;
  anotherChildren?: ReactNode;
  children: ReactNode;
}

const IsDisabled = ({
  condition = true,
  children,
  anotherChildren,
}: IsDisabledProps) => {
  if (!condition) {
    return anotherChildren ? anotherChildren : null;
  }
  return children;
};

export { IsDisabled };
