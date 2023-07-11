import styles from "./import.module.scss";
import { getPrice } from "@/utils";

export const metadata = {
  title: "Import services",
  description: "Custom clearence, taxes, import, export",
};

export default async function Import() {
  const { price } = await getPrice("c", "cargo", 1.5);
  console.log(price);

  return (
    <>
      <h3 className={styles.title}>Import</h3>
      {price}
    </>
  );
}
