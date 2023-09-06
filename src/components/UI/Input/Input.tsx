import { IsDisabled } from "@components/index";
import classnames from "classnames";
import { useState } from "react";
import classes from "./input.module.scss";
import * as I from "@models";

function Input({ onChange, className, value, name, placeholder, disabled, lightBackgroundColor }: I.InputProps) {
  const [isActive, setActive] = useState<boolean>(false);

  const styles = classnames(
    className,
    classes["root"],
    (isActive || value?.trim() !== "") && classes["active"],
    isActive && lightBackgroundColor && classes["activeLightBg"],
  );

  return (
    <div className={styles}>
      <div className={classes["placeholder"]}>{placeholder}</div>
      <IsDisabled condition={!disabled} anotherChildren={<div className={classes["disabled_input"]}>{value}</div>}>
        <input
          type="text"
          value={value}
          name={name}
          onChange={onChange}
          onFocus={() => setActive(true)}
          onBlur={() => {
            if (value?.trim().length === 0) setActive(false);
          }}
          className={classes["input"]}
        />
      </IsDisabled>
    </div>
  );
}

export { Input };
