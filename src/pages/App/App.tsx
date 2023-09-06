import { MyOrders, OrderBook, PlaceOrder } from ".";
import classes from "./app.module.scss";

function App() {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <div className={classes["leftSide"]}>
          <PlaceOrder key="placeOrder" />
          <MyOrders key="myOrders" />
        </div>
        <OrderBook key="orderBook" />
      </div>
    </div>
  );
}

export default App;
