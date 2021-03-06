const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recommended);

router.get("/movies/add", moviesController.add);
router.post("/movies", moviesController.create);

router.get("/movies/edit/:id", moviesController.edit);
router.put("/movies/:id", moviesController.update);

router.delete("/movies/:id/actors/:actorId", moviesController.removeActor);
router.post("/movies/:id/actors", moviesController.addActor);
router.delete("/movies/:id", moviesController.destroy);

router.get("/movies/:id", moviesController.detail);

module.exports = router;
