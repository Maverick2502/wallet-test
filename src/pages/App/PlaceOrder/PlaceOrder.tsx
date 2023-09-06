import unions from "@assets/icons/unions.svg";
import classnames from "classnames";
import { useState } from "react";
import classes from "./placeOrder.module.scss";
import { Button, Card, Input, Tabs } from "@components/index";
import type { ChangeEvent } from "react";
import * as I from "@models";

type OrderType = "limit" | "market";

const initialState: I.OrderProps = {
  amountA: "",
  amountB: "",
  tokenA: "",
  tokenB: "",
  expectedPrice: "",
};

function PlaceOrder() {
  const [order, setOrder] = useState(initialState);
  const [orderSide, setOrderSide] = useState("Buy");
  const [orderType, setOrderType] = useState("limit");

  const handleOrderSideBtn = (type: string) => {
    setOrderSide(type);
  };

  const handleOrderTypeBtn = (type: OrderType) => {
    setOrderType(type);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const isTouched = Object.values(order).every(value => value.trim().length > 0);

  return (
    <Card className={classes["card"]}>
      <div className={classes["card_header"]}>
        <h1>Place the Order</h1>

        <div className={classnames(classes["switcher"], classes["flex"])}>
          <button
            onClick={() => handleOrderTypeBtn("limit")}
            className={orderType === "limit" ? classes["switcher_selected"] : ""}
          >
            Limit
          </button>
          <button
            onClick={() => handleOrderTypeBtn("market")}
            className={orderType === "market" ? classes["switcher_selected"] : ""}
          >
            Market
          </button>
        </div>
      </div>

      <Tabs orderSide={orderSide} handleOrderSideBtn={handleOrderSideBtn} tabs={["Buy", "Sell"]} />

      {/* Form */}
      <form className={classes["form"]}>
        <div className={classes["col"]}>
          <Input
            className={classes["col_w500"]}
            key="tokenA"
            value={order["tokenA"]}
            name="tokenA"
            onChange={handleOnChange}
            placeholder="Token A smart contract address"
          />

          <Input
            className={classes["col_w500"]}
            key="tokenB"
            value={order["tokenB"]}
            name="tokenB"
            onChange={handleOnChange}
            placeholder="Token B smart contract address"
          />
        </div>
        <div className={classes["col"]}>
          <Input
            className={classes["col_w300"]}
            key="amountA"
            value={order["amountA"]}
            name="amountA"
            onChange={handleOnChange}
            placeholder="Token A amount"
          />

          <Input
            className={classes["col_w300"]}
            key="amountB"
            value={order["amountB"]}
            name="amountB"
            onChange={handleOnChange}
            placeholder="Token A amount"
          />
        </div>
        <Input
          lightBackgroundColor={true}
          value={order["expectedPrice"]}
          name="expectedPrice"
          onChange={handleOnChange}
          className={classes["col_w200"]}
          placeholder="Expected order price"
        />
      </form>
      <Button loading={isTouched} className={classes["btn"]}>
        Place order
      </Button>
      <img
        width="auto"
        height="auto"
        draggable={false}
        src={unions}
        alt="geometrical figures"
        className={classes["card_img"]}
      />
    </Card>
  );
}

export { PlaceOrder };
