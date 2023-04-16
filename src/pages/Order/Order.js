import Page from "../../components/Page/Page";
import styles from "./Order.module.css";



import Illustration from "../../assets/images/order.webp";


const Toppings = ({ pizza }) => {


  return (
    <>
      <Page>
        <aside>
          <img src={Illustration} className={styles.Illustration} alt="" />
          <h1>Thanks for your Order.</h1>
          <p>Your order is on its way</p>
        </aside>
        <div className={styles.reciept}>
          <div className={styles.recieptWrapper}>
            <h3 className={styles.recieptTitle}>Order Confirmed!</h3>
            <div className={styles.orderDiv}>
              <img className={styles.pizzaImage} src="https://img.icons8.com/external-sbts2018-solid-sbts2018/256/external-pizza-fast-food-sbts2018-solid-sbts2018.png" alt="pizza" />
              <p className={styles.orderItem}>{pizza.base} pizza</p>
            </div>
            <div >
              <ul className={styles.toppings}>
                {pizza.toppings.map(topping => (<li>{topping}</li>))}
              </ul>
            </div>
          </div>

        </div>
      </Page>
    </>
  );
};

export default Toppings;
