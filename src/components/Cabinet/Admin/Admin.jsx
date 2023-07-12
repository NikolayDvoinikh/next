// "use client";
import { getFuel, setFuel } from "@/utils";
import { Button } from "@/shared/components";

export const Admin = async () => {
  const { data } = await getFuel();
  const jetFuelPrice = data[0].value;

  const currency = await fetch(
    "https://bank.gov.ua/NBU_Exchange/exchange?json"
  );
  const curr = await currency.json();
  const currencyElem = curr.map(
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

  // const handleClick = async () => {
  //   const body = { jetFuelPrice, carrier: "FedEx" };
  //   const result = await setFuel(body);
  //   return result.json();
  // };

  return (
    <div>
      <h2>
        Information about fuel:<p> Price: {jetFuelPrice} Dollars per Gallon</p>
      </h2>
      {currencyElem}
      <div>
        <Button jetFuelPrice={jetFuelPrice}>
          Update Fuel Surcharge automatic
        </Button>
        {/* <Button handleClick={}>Update Fuel Surcharge manual</Button> */}
      </div>
    </div>
  );
};
