"use client";

import Link from "next/link";
import styles from "./menu.module.scss";
import { usePathname } from "next/navigation";

export default function Menu({ list, customClass }) {
  const pathName = usePathname();

  const items = list.map(({ label, path }) => {
    const isActive = pathName.includes(path);
    const fullClass = isActive
      ? `${styles.link} ${styles.current}`
      : `${styles.link} ${customClass}`;

    return (
      <li key={label}>
        <Link href={path} className={fullClass}>
          {label}
        </Link>
      </li>
    );
  });

  return <ul className={styles.wrapper}>{items}</ul>;
}
