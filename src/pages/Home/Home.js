import styles from "./Home.module.css";

import pizzaImage from "../../assets/images/two-pizza.jpg";
import DiscountButton from "../../components/buttons/DiscountButton/DiscountButton";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { easeIn, easeInOut, motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <aside>
        <motion.div
          className={styles.HomeTitleDiv}
          transition={{ ease: easeInOut, duration: 0.4, delay: 0.2 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className={styles.HomeTitle}>
            We deliver <br /> the best <br /> pizzas in town
          </p>
          <p className={styles.HomePara}>
            We prepare healthy food for you with a taste you will never forget.
            <br /> Try our exciting range of pizzas now!
          </p>
          <motion.div
            className={styles.HomeActionDiv}
            transition={{ duration: 0.5, delay: 1, type: "spring" }}
            // onFocus={{ x: 0 }}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
          >
            <p className={styles.DiscountText}>Get discounts!</p>
            <DiscountButton />
            <Link to="/base">
              <motion.button
                className={styles.PizzaButton}
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "11px 20px 56px 0px rgba(0,0,0,0.1),0px 6px 14px -6px rgba(251, 148, 46, 0.5)",
                }}
              >
                Choose you pizzas
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </aside>
      <motion.div
        className={styles.PizzaImageDiv}
        transition={{ ease: [0.3, 0.5, 0.6, 1], duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <LazyLoadImage
          className={styles.PizzaImage}
          src={pizzaImage}
          alt="pizza"
        />
      </motion.div>
    </>
  );
};

export default Home;
