import styles from "./main-container.module.scss";
const MainContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export { MainContainer };
