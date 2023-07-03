import Link from "next/link";

export default function Rates() {
  return (
    <>
      <h2>Rates Page</h2>
      <Link href="/rates/cabinet">go to cabinet</Link>
      <Link href="/rates/calcPrice">go to calculator</Link>
    </>
  );
}
