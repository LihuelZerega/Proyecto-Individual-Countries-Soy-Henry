const { Country, Activity } = require("../../models");
const { v4: uuidv4 } = require("uuid");

const addActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, cId } = req.body;
    console.log("Agregar actividad", req.body);

    const validateActivity = await Activity.findOne({
      where: {
        name: name,
      },
    });

    if (!name || !difficulty || !duration || !season || !cId) {
      res.status(404).json("Por favor completa todos los campos.");
    }

    if (validateActivity) {
      res.status(404).json("Esta actividad ya existe.");
    } else {
      const id = uuidv4();
      const newActivity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
      });

      for (const countryId of cId) {
        await newActivity.addCountry(countryId);
      }

      res.status(200).send("OK");
    }
  } catch (error) {
    console.log("errro", error);
    res.status(500).send(error);
  }
};

const getActivities = async (req, res) => {
  let activity = await Activity.findAll();
  res.status(200).send(activity);
};

module.exports = {
  addActivity,
  getActivities,
};
