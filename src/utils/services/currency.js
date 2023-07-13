export const getCurrency = async () => {
  try {
    const currency = await fetch(
      "https://bank.gov.ua/NBU_Exchange/exchange?json"
    );
    return await currency.json();
  } catch (error) {
    console.log(error.message);
  }
};
