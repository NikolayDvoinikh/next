const { FUEL_KEY } = process.env;

export const getPrice = async (zone, box, weigth) => {
  try {
    const resp = await fetch(
      `http://localhost:3001/api/zones/price?zone=${zone}&box=${box}&weight=${weigth}`
    );
    if (!resp.ok) throw new Error("Something going wrong");
    return resp.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getFuel = async () => {
  try {
    const resp = await fetch(
      `https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${FUEL_KEY}&frequency=weekly&data[0]=value&facets[product][]=EPJK&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=1`
    );

    if (!resp.ok) throw new Error("Can't get Fuel Price");

    const { response } = await resp.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const setFuel = async (body) => {
  try {
    console.log(body);
    const resp = await fetch(`http://localhost:3001/api/transporters/fuel`, {
      body: JSON.stringify(body),
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!resp.ok) throw new Error("check data");

    const { response } = await resp.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
