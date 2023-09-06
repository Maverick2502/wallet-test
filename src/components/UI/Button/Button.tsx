import { LoadingIcon } from "@assets/icons/loading";
import { IsDisabled } from "@components/index";
import * as I from "@models";
import classnames from "classnames";
import classes from "./button.module.scss";

function Button({ children, className, style, disabled = false, loading = false, onClick }: I.ButtonProps) {
  const styles = classnames(className, classes["btn"], loading && classes["btn_disabled"]);

  return (
    <IsDisabled
      condition={!disabled}
      anotherChildren={
        <div className={classnames(classes["btn"], classes["btn_disabled"])}>
          {loading === true && <LoadingIcon />}
          {children}
        </div>
      }
    >
      <button onClick={loading ? undefined : onClick} style={style} className={styles}>
        {loading === true && <LoadingIcon />}
        {children}
      </button>
    </IsDisabled>
  );
}

export { Button };
