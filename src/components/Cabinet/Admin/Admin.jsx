// "use client";
import { getFuel, getFuelStatus } from "@/utils";
import { Button } from "@/shared/components";

export const Admin = async () => {
  const { data } = await getFuel();
  const jetFuelPrice = data[0].value;

  const currency = await fetch(
    "https://bank.gov.ua/NBU_Exchange/exchange?json"
  );
  const curr = await currency.json();
  const date = new Date();
  console.log(date.toLocaleDateString());
  const currencyElem = curr.map(({ CurrencyCodeL, Amount, Units }) => {
    if (
      CurrencyCodeL === "EUR" ||
      CurrencyCodeL === "USD" ||
      CurrencyCodeL === "PLN" ||
      CurrencyCodeL === "GBP"
    ) {
      return (
        <div>
          <span>
            {Units} {CurrencyCodeL} - {Amount} UAH
          </span>
        </div>
      );
    }
  });

  const fuelStatus = await getFuelStatus({ jetFuelPrice, carrier: "FedEx" });

  // const handleClick = async () => {
  //   const body = { jetFuelPrice, carrier: "FedEx" };
  //   const result = await setFuel(body);
  //   return result.json();
  // };

  return (
    <div>
      <h2>
        Actual information about fuel:
        <p> Price: {jetFuelPrice} Dollars per Gallon</p>
      </h2>
      <p>Fedex Fuel surcharge is {fuelStatus[0].surcharge}%</p>
      <h2>Exchange rate</h2>
      <h3>Today: {date.toLocaleDateString()}</h3>
      <h3>Currency on {curr[0].StartDate}</h3>
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
