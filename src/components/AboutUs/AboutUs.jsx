import styles from "./about-us.module.scss";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("About");
  return (
    <div className={styles.sky}>
      <h1 className={styles.title}>{t("p-title")}</h1>
      <p className={styles.about}>{t("content")}</p>
    </div>
  );
}
