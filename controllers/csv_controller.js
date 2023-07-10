const CSV = require("../models/csv");
const fs = require("fs");

// controller for upload csv file

module.exports.upload = async function (req, res) {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // file is not csv
    if (req.file.mimetype != "text/csv") {
      return res.status(400).send("Select CSV files only.");
    }

    const { originalname, path } = req.file;

    // Create a new CSV document
    const csv = new CSV({
      fileName: originalname,
      filePath: path,
      //   file: fs.readFileSync(path, "utf8"), // Read the file content and store it
      file: req.file.filename,
    });

    // Save the CSV document to the database
    await csv.save();

    // File processing is complete
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during CSV file upload.");
  }
};