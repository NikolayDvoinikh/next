// "use client";
import { getFuel } from "@/utils";
export const Admin = async () => {
  const { data } = await getFuel();
  const fuelPrice = data[0].value;
  const currency = await fetch(
    "https://bank.gov.ua/NBU_Exchange/exchange?json"
  );
  const curr = await currency.json();
  const currensyElem = curr.map(
    ({ StartDate, CurrencyCodeL, Amount, Units }) => {
      if (
        CurrencyCodeL === "EUR" ||
        CurrencyCodeL === "USD" ||
        CurrencyCodeL === "PLN" ||
        CurrencyCodeL === "GBP"
      ) {
        return (
          <div>
            <h3>{StartDate}</h3>
            <span>
              {Units} {CurrencyCodeL} - {Amount} UAH
            </span>
          </div>
        );
      }
    }
  );
  return (
    <div>
      <h2>
        Information about fuel:<p> Price: {fuelPrice}</p>
      </h2>
      {currensyElem}
    </div>
  );
};
