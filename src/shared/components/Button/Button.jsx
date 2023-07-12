"use client";
import { setFuel } from "@/utils";

export const Button = ({ type = "button", jetFuelPrice, children }) => {
  const handleClick = async () => {
    const body = { jetFuelPrice, carrier: "FedEx" };
    const result = await setFuel(body);
    return result;
  };

  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
};
