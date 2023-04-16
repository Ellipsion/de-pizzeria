import Header from "../Header/Header";
import styles from "./Page.module.css"
const Page = (props) => {
    return <>
        <Header />
        <div className={styles.PageContainerMain}>
            <div className={styles.PageContainer}>
                {props.children}
            </div>
        </div>
    </>
}

export default Page;