import styles from "./Order.module.css";

import Illustration from "../../assets/images/order.webp";
// import pizzaIcon from "./../../assets/icons/full-pizza.png";
import pizzaImage from "./pizza.svg";
import pizzaSlice from "./slice.svg";
import { useEffect } from "react";
import { easeIn, motion } from "framer-motion";

const containervariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: easeIn,
      duration: 0.2,
    },
  },
};

const sliceVariants = {
  initial: {
    rotate: -140,
    scale: 1,
  },
  animate: {
    scale: 1.2,
    transition: {
      delay: 3,
      // duration: 1,
      // ease: easeIn,
      type: "spring",
      damping: 2,
    },
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => setShowModal(false), 3000);
    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <>
      <motion.aside
        className={styles.TopDiv}
        variants={containervariants}
        initial="initial"
        animate="visible"
      >
        <img src={Illustration} className={styles.Illustration} alt="" />
        <h1>Thanks for your Order.</h1>
        <p>Your order is on its way</p>
      </motion.aside>
      <div className={styles.reciept}>
        <div className={styles.recieptWrapper}>
          <h3 className={styles.recieptTitle}>Order Confirmed!</h3>
          <div className={styles.orderDiv}>
            <div className={styles.pizzaDiv}>
              <motion.img
                className={styles.pizzaImage}
                // variants={imageVariants}
                // initial={"initial"}
                // animate={"visible"}
                src={pizzaImage}
                alt="pizza"
              />
              <motion.img
                className={styles.pizzaSlice}
                variants={sliceVariants}
                initial="initial"
                animate="animate"
                src={pizzaSlice}
                alt="pizza"
              />
            </div>

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

export default Order;
