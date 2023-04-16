import Header from "../Header/Header";
import styles from "./Page.module.css";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.PageContainerMain}>
        <div className={styles.PageContainer}>
          <Outlet />
          {/* {props.children} */}
        </div>
      </div>
    </>
  );
};

export default Page;
