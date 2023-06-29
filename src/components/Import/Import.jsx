import styles from "./import.module.scss";
// import { useState, useEffect } from "react";
export const metadata = {
  title: "Import services",
  description: "Custom clearence, taxes, import, export",
};

export default async function Import() {
  const res = await fetch("http://localhost:3000/api/rate", { zone: "A" });
  const data = await res.json(res);

  // useEffect(() => {
  //   const fetchPrice = async () => {
  //     const res = await fetch("/api/rate", { zone: "A" });
  //     const data = await res.json(res);
  //     setPrice(data);
  //     console.log(price);
  //   };
  //   fetchPrice();
  // }, []);

  return (
    <>
      <h3 className={styles.title}>Import</h3>
      {data.map(({ env }) => (
        <p>{env[0.5]}</p>
      ))}
    </>
  );
}
