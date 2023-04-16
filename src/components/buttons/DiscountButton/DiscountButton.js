import styles from "./DiscountButton.module.css";
import { BsTriangle } from "react-icons/bs";

const DiscountButton = () => {
    return <button className={styles.DiscountButton}><BsTriangle /></button>
}

export default DiscountButton;