import styles from "./Card.module.css";
import pizzaIcon from "../../../assets/icons/icons8-pizza.png";

const Card = ({ title, active, action }) => {
  return (
    <div
      onClick={() => action(title)}
      className={active ? styles.CardActive : styles.Card}
    >
      <img className={styles.CardImage} src={pizzaIcon} alt="pizza" />
      <p className={styles.CardTitle}>{title}</p>
    </div>
  );
};

export default Card;
