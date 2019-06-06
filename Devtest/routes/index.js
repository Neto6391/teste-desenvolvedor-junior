const express = require("express");
const router = express.Router();
const controller = require("../controllers/characterController");

/* GET home page from controller Character. */
router.get("/", controller.get);

module.exports = router;
