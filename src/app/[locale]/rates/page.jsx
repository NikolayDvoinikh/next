"use client";

import { useState } from "react";

import Link from "next/link";
import { getPrice } from "@/utils";

export default function Rates() {
  const [price, setPrice] = useState(null);
  const handlePrice = async () => {
    const res = await getPrice("a", "pak", 1.5);

    setPrice(res.price);
  };

  return (
    <>
      <h2>Rates Page</h2>
      {price}

      <button onClick={handlePrice}>get price</button>
      <Link href="/cabinet">go to cabinet</Link>
      <Link href="/rates/calcPrice">go to calculator</Link>
    </>
  );
}
