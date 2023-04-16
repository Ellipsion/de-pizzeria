import styles from "./Order.module.css";

import Illustration from "../../assets/images/order.webp";
import pizzaIcon from "./../../assets/icons/full-pizza.png";

const Toppings = ({ pizza }) => {
  return (
    <>
      <aside>
        <img src={Illustration} className={styles.Illustration} alt="" />
        <h1>Thanks for your Order.</h1>
        <p>Your order is on its way</p>
      </aside>
      <div className={styles.reciept}>
        <div className={styles.recieptWrapper}>
          <h3 className={styles.recieptTitle}>Order Confirmed!</h3>
          <div className={styles.orderDiv}>
            <img className={styles.pizzaImage} src={pizzaIcon} alt="pizza" />
            <p className={styles.orderItem}>{pizza.base} pizza</p>
          </div>
          <div>
            <ul className={styles.toppings}>
              {pizza.toppings.map((topping) => (
                <li key={"order-" + topping}>{topping}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toppings;
