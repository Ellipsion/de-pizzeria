import styles from "./Base.module.css";

import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import Card from "../../components/cards/Card/Card";
import Illustration from "../../assets/images/pizza-illustration.webp";

import { motion, AnimatePresence } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust", "Thicccc"];

  return (
    <>
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        className={styles.BaseDiv}
      >
        <div className={styles.BaseWrapper}>
          <div className={styles.TopDiv}>
            <p>Step 1</p>
            <h1>Choose your base:</h1>
            <img
              className={styles.PizzaIllustartion}
              src={Illustration}
              alt=""
            />
          </div>
          <div className={styles.CardWrapper}>
            <div className={styles.CardDiv}>
              {bases.map((base) => {
                let active = base === pizza.base;
                return (
                  <Card
                    key={base}
                    action={addBase}
                    title={base}
                    active={active}
                  />
                );
              })}
            </div>
            <div className={styles.ActionDiv}>
              {pizza.base && (
                <Link to="/toppings">
                  <PrimaryButton text="Next" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Base;
