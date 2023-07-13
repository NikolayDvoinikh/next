import { getCurrency } from "@/utils";
import styles from "./currency.module.scss";

export function generateMetadata() {
  return {
    description: "Currency, National Bank of Ukraine",
  };
}

export const Currency = async () => {
  const currency = await getCurrency();
  const date = new Date();

  const currencyList =
    Boolean(currency) &&
    currency.map(({ CurrencyCodeL, Amount, Units }) => {
      if (
        CurrencyCodeL === "EUR" ||
        CurrencyCodeL === "USD" ||
        CurrencyCodeL === "PLN" ||
        CurrencyCodeL === "GBP"
      ) {
        return (
          <li>
            <p className={styles.currency_info}>
              {Units} {CurrencyCodeL} - {Amount} UAH
            </p>
          </li>
        );
      }
    });
  return (
    <div className={styles.currency}>
      <h2 className={styles.currency_title}>Exchange rate</h2>
      <h3 className={styles.currency_date}>
        Today: {date.toLocaleDateString()}
      </h3>
      {Boolean(currency) && (
        <>
          <h3 className={styles.currency_date}>
            Currency on {currency[0].StartDate}
          </h3>
          <ul className={styles.currency_list}>{currencyList}</ul>
        </>
      )}
    </div>
  );
};
