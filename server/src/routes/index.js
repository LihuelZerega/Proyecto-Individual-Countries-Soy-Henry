const { Router } = require('express');
const countriesRoutes = require('./Country');
const activitiesRoutes = require('./Activity');

const router = Router();

router.use('/', countriesRoutes)
router.use('/', activitiesRoutes)

module.exports = router;