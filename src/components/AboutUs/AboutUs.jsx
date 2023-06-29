import styles from "./about-us.module.scss";

export default function AboutUs() {
  return (
    <>
      <h1 className={styles.title}>"ELIN Ltd" firm LLC </h1>
      <p className={styles.about}>
        "ELIN Ltd" firm LLC is a Ukrainian logistics company that has had the
        official status of an express carrier in Ukraine since 1993. Specializes
        in international courier delivery of express shipments to more than 220
        countries of the world and truck transportation within Ukraine,
        providing a full range of services for customs clearance of cargo.
      </p>
    </>
  );
}
