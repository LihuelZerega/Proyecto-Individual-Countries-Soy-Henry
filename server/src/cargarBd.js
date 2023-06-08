const axios = require("axios");

getInfoApi = async () => {
  const urlApi = await axios.get("http://localhost:5000/countries");
  const apiInfo = await urlApi.data.map((t) => {
    return {
      name: t.name.common,
      cca3: t.cca3,
      id: t.cca3,
      img: t.flags[0],
      continent: t.continents[0],
      capital: t.capital ? t.capital[0] : "No Capital",
      population: t.population,
    };
  });
  return apiInfo;
};

async function cargarBd() {
  try {
    {
      const countries = await getApiInfo();
      await Promise.all(
        countries.map(async (e) => {
          console.log(e);
          await Country.create(e);
        })
      );
    }
    console.log("Base de Datos cargada");
  } catch (error) {
    console.log(error);
  }
}

module.exports = cargarBd;
