import { Card } from "@components/UI/Card/Card";
import * as I from "@models";
import classes from "./orderBook.module.scss";

const dataOrderBookSize: I.OrderBookSize[] = [
  { id: 1, valueSize: 48, valueUsdt: 40 },
  { id: 2, valueSize: 86, valueUsdt: 60 },
  { id: 3, valueSize: 76, valueUsdt: 70 },
  { id: 4, valueSize: 96, valueUsdt: 86 },
  { id: 5, valueSize: 48, valueUsdt: 43 },
  { id: 6, valueSize: 46, valueUsdt: 40 },
];

const dataOrderBookMarketPrice: I.OrderBookMarket[] = [
  { id: 1, marketPrice: 100, valueUsdt: 90 },
  { id: 2, marketPrice: 88, valueUsdt: 80 },
  { id: 3, marketPrice: 36, valueUsdt: 33 },
];

function OrderBook() {
  return (
    <Card className={classes["card"]}>
      <h1 className={classes["card_header"]}>Order Book</h1>
      <div className={classes["table-responsive"]}>
        {/* Top table:  Size ETH and Price USDT*/}

        <table className={classes["table"]}>
          <tr className={classes["table_head"]}>
            <th>Size ETH</th>
            <th>Price USDT</th>
          </tr>

          {dataOrderBookSize.map(item => (
            <tr key={item.id} className={classes["table_body"]}>
              <td className={classes["table_body_leftColumn"]}>
                <div style={{ width: item.valueSize }} className={classes["indicator"]}>
                  <span>{item.valueSize}</span>
                </div>
              </td>
              <td className={classes["table_body_rightColumn"]}>{item.valueUsdt}</td>
            </tr>
          ))}
        </table>

        {/* Top table:  Size ETH and Price USDT*/}

        <table className={classes["table"]}>
          <tr className={classes["table_head"]}>
            <th>Market Price</th>
            <th>Price USDT</th>
          </tr>

          {dataOrderBookMarketPrice.map(item => (
            <tr key={item.id} className={classes["table_body"]}>
              <td className={classes["table_body_leftColumn"]}>
                <div style={{ width: item.marketPrice }} className={classes["indicator"]}>
                  <span>{item.marketPrice}</span>
                </div>
              </td>
              <td className={classes["table_body_rightColumn"]}>{item.valueUsdt}</td>
            </tr>
          ))}
        </table>
      </div>
    </Card>
  );
}

export { OrderBook };
