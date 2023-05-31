import styles from "./custom-services.module.scss";

export const metadata = {
  title: "Custom services",
  description: "Custom clearence, taxes, import, export",
};

export default function CustomsServices() {
  return <h3 className={styles.title}>CustomsServices</h3>;
}
