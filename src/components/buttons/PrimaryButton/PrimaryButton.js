import styles from "./PrimaryButton.module.css";
import { motion } from "framer-motion";

const PrimaryButton = ({ text }) => {
  return (
    <motion.button
      className={styles.PrimaryButton}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "11px 20px 56px 0px rgba(0,0,0,0.1),0px 6px 14px -6px rgba(251, 148, 46, 0.5)",
      }}
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;
