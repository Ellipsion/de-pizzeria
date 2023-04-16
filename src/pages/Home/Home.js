import Page from "../../components/Page/Page";
import styles from "./Home.module.css";

import pizzaImage from "../../assets/images/two-pizza.jpg";
import DiscountButton from "../../components/buttons/DiscountButton/DiscountButton";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Page>
        <aside>
          <div className={styles.HomeTitleDiv}>
            <p className={styles.HomeTitle}>
              We deliver <br /> the best <br /> pizzas in town
            </p>
            <p className={styles.HomePara}>
              We prepare healthy food for you with a taste you will never
              forget.
              <br /> Try our exciting range of pizzas now!
            </p>
            <div className={styles.HomeActionDiv}>
              <p className={styles.DiscountText}>Get discounts!</p>
              <DiscountButton />
              <Link to="/base">
                <button className={styles.PizzaButton}>
                  Choose you pizzas
                </button>
              </Link>
            </div>
          </div>
        </aside>
        <div className={styles.PizzaImageDiv}>
          <img className={styles.PizzaImage} src={pizzaImage} alt="" />
        </div>
      </Page>
    </>
  );
};

export default Home;
