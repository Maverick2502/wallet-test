import { Footer, Header } from "@components";
import type { ReactNode } from "react";
import classes from "./layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div role="document">
      <div role="banner" className={classes["bgOverlay"]}>
        <Header key="header" />
        <main key="main" className={classes["main"]}>
          {children}
        </main>
      </div>
      <Footer key="footer" />
    </div>
  );
}

export { Layout };
