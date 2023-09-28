const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const profilControllers = require("./controllers/profilControllers");
const matchControllers = require("./controllers/matchControllers");

router.get("/user", userControllers.browse);
router.put("/user/:id", userControllers.edit);

router.get("/profil", profilControllers.browse);
router.delete("/profil/:id", profilControllers.destroy);

router.get("/match", matchControllers.browse);
router.post("/match", matchControllers.add);

module.exports = router;
