import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "@/shared/components";
import Navigation from "./Navigation";

const navItems = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Tracking", path: "/track" },
  { label: "Rates", path: "/rates" },
  { label: "Information", path: "/information" },
  { label: "Contacts", path: "/contacts" },
];

const Header = () => {
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
