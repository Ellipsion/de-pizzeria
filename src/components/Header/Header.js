import styles from "./Header.module.css";
import logo from "../../assets/images/logo/logo.png";
// import logo2 from "../../assets/images/logo/logo3.png";
import { Link } from "react-router-dom";
import DiscountButton from "../buttons/DiscountButton/DiscountButton";

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.HeaderContainer}>
          <Link to={"/"}>
            <div className={styles.HeaderLogo}>
              <img className={styles.HeaderLogoImage} src={logo} alt="" />
              <div className={styles.HeaderTitleDiv}>
                <h1 className={styles.HeaderTitle}>Pizzeria</h1>
              </div>
            </div>
          </Link>
          <nav className="HeaderNav">
            <ul className={styles.HeaderNavLinks}>
              <Link to={"/"}>
                <li className={styles.HeaderNavLink}>Home</li>
              </Link>
              <Link to={"/base"}>
                <li className={styles.HeaderNavLink}>Menu</li>
              </Link>
              <Link to={"/base"}>
                <li className={styles.HeaderNavLink}>Order</li>
              </Link>
            </ul>
          </nav>
          <DiscountButton />
        </div>
      </header>
    </>
  );
};

export default Header;
