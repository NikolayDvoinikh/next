import styles from "./main-container.module.scss";
const MainContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export { MainContainer };
