import styles from "./Toppings.module.css";

import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import Card from "../../components/cards/Card/Card";
import Illustration from "../../assets/images/toppings-illustrations.webp";

import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olive titties",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.BaseDiv}
      >
        <div className={styles.BaseWrapper}>
          <div className={styles.TopDiv}>
            <p>Step 2</p>
            <h1>Choose your Toppings:</h1>
            <img
              className={styles.PizzaIllustartion}
              src={Illustration}
              alt=""
            />
          </div>
          <div className={styles.CardWrapper}>
            <div className={styles.CardDiv}>
              {toppings.map((topping) => {
                let active = pizza.toppings.includes(topping);
                return (
                  <Card
                    key={topping}
                    action={addTopping}
                    title={topping}
                    active={active}
                  />
                );
              })}
            </div>
            {pizza.toppings.length > 0 && (
              <Link to="/order">
                <PrimaryButton text="Order" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Toppings;
