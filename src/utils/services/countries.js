export const getCountries = async (q) => {
  try {
    const resp = await fetch(`http://localhost:3001/api/countries/?q=${q}`);
    if (!resp.ok) throw new Error("Something going wrong ");
    return resp.json();
  } catch (error) {
    console.log(error.message);
  }
};
