const { Router } = require('express');
const { Country, Activity } = require('../db');

const router = Router();

router.get('/countries', async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: Activity,
    });
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/countries/:idPais', async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findOne({
      where: { id: idPais },
      include: Activity,
    });
    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }
    res.json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/countries/name', async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (countries.length === 0) {
      return res.status(404).json({ message: 'No countries found' });
    }
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/activities', async (req, res) => {
  const { name, difficulty, season, countries } = req.body;
  try {
    const activity = await Activity.create({
      name,
      difficulty,
      season,
    });
    await activity.setCountries(countries);
    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
