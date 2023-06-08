const Country = require('../models/country');
const Activity = require('../models/activity');
const axios = require("axios");
const { cargarBd } = require("../cargarBd");

const getInfoDb = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCountries = async () => {
  const dbInfo = await getDbInfo();
  if (!dbInfo.length) {
    await loadDb();
    return await getDbInfo();
  }
  return dbInfo;
};

const getCountries = async (req, res) => {
  let countries = await getAllCountries();
  try {
    countries.length
      ? res.status(200).json(countries)
      : res.status(404).send("Error ):");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCountryById = async (req, res) => {
  const id = req.params;
  let countries = await getAllCountries();
  if (id) {
    let country = countries.filter((fl) => fl.id == id);
    country.length
      ? res.status(200).json(country)
      : res.status(404).send("Error ):");
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      let countries = await getAllCountries();
      let country = countries.filter((fl) =>
        fl.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log("countries", country);
      country.length
        ? res.status(200).json(country)
        : res.status(404).send("Error ):");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = {
    getCountries,
    getCountryById,
    getCountryByName,
  };