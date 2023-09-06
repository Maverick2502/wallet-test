import { Card } from "@components/UI/Card/Card";
import classes from "./myOrders.module.scss";

function MyOrders() {
  return (
    <Card className={classes["card"]}>
      <h1 className={classes["card_header"]}>My Orders</h1>

      <div className={classes["table-responsive"]}>
        <table className={classes["table"]}>
          <tr className={classes["table_head"]}>
            <th>TYPE</th>
            <th>SIDE</th>
            <th>AMOUNT</th>
            <th>PRICE</th>
            <th>FILLED</th>
            <th>STATUS</th>
            <th>CANCEL</th>
          </tr>

          <tr className={classes["table_body"]}>
            <td>Market</td>
            <td>Buy</td>
            <td>50</td>
            <td>251.8</td>
            <td>50</td>
            <td>Filled</td>
            <td>N/A</td>
          </tr>

          <tr className={classes["table_body"]}>
            <td>Market</td>
            <td>Buy</td>
            <td>50</td>
            <td>251.8</td>
            <td>50</td>
            <td>Filled</td>
            <td>N/A</td>
          </tr>

          <tr className={classes["table_body"]}>
            <td>Market</td>
            <td>Buy</td>
            <td>50</td>
            <td>251.8</td>
            <td>50</td>
            <td>Filled</td>
            <td>N/A</td>
          </tr>
        </table>
      </div>
    </Card>
  );
}

export { MyOrders };
