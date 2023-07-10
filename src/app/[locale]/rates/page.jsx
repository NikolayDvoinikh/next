"use client";

import { useState } from "react";

import Link from "next/link";
import { getPrice } from "@/utils/services/price";

export default function Rates() {
  const [price, setPrice] = useState(null);
  const handlePrice = async () => {
    // const result = await fetch(
    //   // `http://localhost:3001/api/zones/price?zone=a&box=pak&weight=1.5`
    //   `http://localhost:3001/api/countries?q=Ал`
    // );
    // const data = await result.json();
    const res = await getPrice("a", "pak", 1.5);

    setPrice(res.price);
  };

  return (
    <>
      <h2>Rates Page</h2>
      {price}

      <button onClick={handlePrice}>get price</button>
      <Link href="/rates/cabinet">go to cabinet</Link>
      <Link href="/rates/calcPrice">go to calculator</Link>
    </>
  );
}
