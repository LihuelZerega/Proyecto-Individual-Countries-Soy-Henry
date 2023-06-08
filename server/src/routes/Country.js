const { Router } = require("express");
const router = Router();
const {
  getCountries,
  getCountryById,
  getCountryByName,
} = require("../controllers/controllerCountries");

router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);
router.get("/countries/name/:name", getCountryByName);

module.exports = router;
