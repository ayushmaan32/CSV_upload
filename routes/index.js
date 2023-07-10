const express = require("express");
const multer = require("multer");

const router = express.Router();
console.log("router loaded");

const homeController = require("../controllers/home_controller");
const csvController = require("../controllers/csv_controller");
const upload = multer({ dest: "uploads/files" });

router.get("/", homeController.home);
router.post("/upload", upload.single("csv"), csvController.upload);

module.exports = router;
