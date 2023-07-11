// importing Packages
const express = require("express");
const multer = require("multer");

const router = express.Router();

// console.log("router loaded");

// importing controllers
const homeController = require("../controllers/home_controller");
const csvController = require("../controllers/csv_controller");
const upload = multer({ dest: "uploads/files" });

// routes
router.get("/", homeController.home);
router.post("/upload", upload.single("csv"), csvController.upload);
router.get("/delete/:id", csvController.delete);
router.get("/view/:id", csvController.viewfile);

module.exports = router;
