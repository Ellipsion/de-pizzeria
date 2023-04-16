import styles from "./Card.module.css";
import pizzaIcon from "../../../assets/icons/icons8-pizza.png";

import { motion } from "framer-motion";

const Card = ({ title, active, action }) => {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      onClick={() => action(title)}
      className={active ? styles.CardActive : styles.Card}
    >
      <img className={styles.CardImage} src={pizzaIcon} alt="pizza" />
      <p className={styles.CardTitle}>{title}</p>
    </motion.div>
  );
};

export default Card;
