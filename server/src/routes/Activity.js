const { Router } = require("express");
const router = Router();
const {
  addActivity,
  getActivities,
} = require("../controllers/controllerActivities");

router.post("/activity", addActivity);
router.get("/activity/", getActivities);

module.exports = router;

