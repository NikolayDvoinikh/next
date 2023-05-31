"use client";

import styles from "./header.module.scss";
import { useState } from "react";
import Menu from "@/shared/components/Menu/Menu";

export default function Navigation({ list }) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav
        className={menu ? [styles.nav, styles.active].join(" ") : styles.nav}
      >
        <Menu list={list} customClass={styles.link} />
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
