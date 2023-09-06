import classes from "./tabs.module.scss";
import classnames from "classnames";
import * as I from "@models";

function Tabs({ orderSide, className, handleOrderSideBtn, tabs }: I.Tabs) {
  const styles = classnames(className, classes["orderSide"]);

  return (
    <div className={styles}>
      {tabs.map(tab => (
        <button
          key={tab}
          className={orderSide === tab ? classes["selected"] : ""}
          onClick={() => handleOrderSideBtn(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export { Tabs };
