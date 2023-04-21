import styles from "./Header.module.css";
import logo from "../../assets/images/logo/logo-no-bg.png";
// import logo2 from "../../assets/images/logo/logo3.png";
import { Link } from "react-router-dom";
import DiscountButton from "../buttons/DiscountButton/DiscountButton";

import { easeIn, motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.header
        className={styles.Header}
        transition={{ ease: easeIn, duration: 0.4 }}
        initial={{ y: "-50vh", scale: 0.8 }}
        animate={{
          y: 0,
          scale: 1,
        }}
      >
        <div className={styles.HeaderContainer}>
          <Link to={"/"}>
            <div className={styles.HeaderLogo}>
              <motion.img
                whileHover={{ y: -5 }}
                className={styles.HeaderLogoImage}
                src={logo}
                alt=""
              />
              <div className={styles.HeaderTitleDiv}>
                <h1 className={styles.HeaderTitle}>Pizzeria</h1>
              </div>
            </div>
          </Link>
          <nav className={styles.HeaderNav}>
            <ul className={styles.HeaderNavLinks}>
              <Link to={"/"}>
                <motion.li
                  whileHover={{ y: -3 }}
                  className={styles.HeaderNavLink}
                >
                  Home
                </motion.li>
              </Link>
              <Link to={"/base"}>
                <motion.li
                  whileHover={{ y: -4 }}
                  className={styles.HeaderNavLink}
                >
                  Menu
                </motion.li>
              </Link>
              <Link to={"/base"}>
                <motion.li
                  whileHover={{ y: -4 }}
                  className={styles.HeaderNavLink}
                >
                  Order
                </motion.li>
              </Link>
            </ul>
          </nav>
          <DiscountButton />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
