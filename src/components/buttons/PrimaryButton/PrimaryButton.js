import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ text }) => {
    return <button className={styles.PrimaryButton}>{text}</button>;
};

export default PrimaryButton;
