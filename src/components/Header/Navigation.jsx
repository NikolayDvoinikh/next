"use client";

import styles from "./header.module.scss";
import { useState } from "react";
import Menu from "@/shared/components/Menu/Menu";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

export default function Navigation({ list }) {
  const [menu, setMenu] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* <select className={styles.lang}>
        <option value="Eng" className={styles.lang_opt}>
          EN
        </option>
        <option value="Укр" className={styles.lang_opt}>
          UA
        </option>
      </select> */}
      <div className={styles.lang}>
        <Link href={path} locale="en" className={styles.lang_opt}>
          EN
        </Link>
        <div>|</div>
        <Link href={path} locale="uk" className={styles.lang_opt}>
          Укр
        </Link>
      </div>
      <nav
        className={menu ? [styles.nav, styles.active].join(" ") : styles.nav}
      >
        <Menu list={list} customClass={styles.link} handleClick={toggleMenu} />
      </nav>

      {menu ? (
        <div className={styles.open} onClick={toggleMenu}>
          X
        </div>
      ) : (
        <div className={styles.burger_btn} onClick={toggleMenu}>
          <span></span>
        </div>
      )}
    </>
  );
}
