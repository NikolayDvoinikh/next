import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "@/shared/components";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");
  const navItems = [
    { label: t("links.about"), path: "/about" },
    { label: t("links.services"), path: "/services" },
    { label: t("links.track"), path: "/track" },
    { label: t("links.rates"), path: "/rates" },
    { label: t("links.information"), path: "/information" },
    { label: t("links.contacts"), path: "/contacts" },
  ];
  return (
    <header className={styles.header}>
      <Container>
        <Link href="/" className={styles.link}>
          COMPANY LOGO
        </Link>
        <Navigation list={navItems} />
      </Container>
    </header>
  );
};
export { Header };
