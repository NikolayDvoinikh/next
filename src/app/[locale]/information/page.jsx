// "use client";
export default async function Information() {
  const { FUEL_KEY } = process.env;

  const resp = await fetch(
    `https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${FUEL_KEY}&frequency=weekly&data[0]=value&facets[product][]=EPJK&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=1`
  );

  const { response } = await resp.json();

  return (
    <h2>
      Information Page <p>fuel: {response.data[0].value}</p>
    </h2>
  );
}

// export default function Information() {
//   const { FUEL_KEY } = process.env;
//   const getFuel = async () => {
//     const resp = await fetch(`https://api.eia.gov/v2/petroleum/pri/spt/data`, {
//       api_key: "roY1aZZQ7niVWmyOlSfAgiCbcs2RcfzHVtk4GnWW",
//       frequency: "weekly",
//       data: ["value"],
//       facets: {
//         product: ["EPJK"],
//       },
//       sort: [
//         {
//           column: "period",
//           direction: "desc",
//         },
//       ],
//       offset: 0,
//       length: 1,
//     });
//     const { response } = await resp.json();
//     console.log(response.data[0].value);
//   };
//   getFuel();
//   return <h2>Information Page</h2>;
// }
