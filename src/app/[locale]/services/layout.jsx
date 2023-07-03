import styles from "./services.module.scss";
import Menu from "@/shared/components/Menu/Menu";

const servicesItems = [
  { label: "Import", path: "/services/import" },
  { label: "Export", path: "/services/export" },
  { label: "Customs Services", path: "/services/custom" },
];

export default function ServicesLayout({ children }) {
  return (
    <div>
      <h2 className={styles.title}>Services</h2>
      <Menu list={servicesItems} />
      {children}
    </div>
  );
}
