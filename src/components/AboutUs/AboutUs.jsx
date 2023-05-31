import styles from "./about-us.module.scss";

export default function AboutUs() {
  return (
    <>
      <h1 className={styles.title}>My company</h1>
      <p className={styles.about}>
        We are logistic company that deliver large and small cargo around the
        world...
      </p>
    </>
  );
}
