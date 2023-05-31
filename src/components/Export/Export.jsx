import styles from "./export.module.scss";

export const metadata = {
  title: "Export services",
  description: "Custom clearence, taxes, import, export",
};

export default function Import() {
  return <h3 className={styles.title}>Export</h3>;
}
