const { Router } = require("express");
const router = Router();

const actorsController = require("../controllers/actorsController");

router.get("/actors", actorsController.list);
router.get("/actors/:id", actorsController.detail);

module.exports = router;
