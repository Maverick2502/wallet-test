import type { ReactNode } from "react";
import classNames from "classnames";
import classes from "./card.module.scss";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return <div className={classNames(className, classes["card"])}>{children}</div>;
}

export { Card };
