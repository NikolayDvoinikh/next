export const getPrice = async (zone, box, weigth) => {
  try {
    const resp = await fetch(
      `http://localhost:3001/api/zones/price?zone=${zone}&box=${box}&weight=${weigth}`
    );
    if (!resp.ok) throw new Error("Something going wrong ");
    return resp.json();
  } catch (error) {
    console.log(error.message);
  }
};
