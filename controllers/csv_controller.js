const CSV = require("../models/csv");
const fs = require("fs");
const csvParser = require("csv-parser");

// controller for upload csv file

module.exports.upload = async function (req, res) {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // if file is not csv
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
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during CSV file upload.");
  }
};

// controller for delete csv file
module.exports.delete = async function (req, res) {
  try {
    const fileId = req.params.id;

    // Find the file by its unique identifier (fileId) in the database
    const file = await CSV.findById(fileId);

    if (!file) {
      return res.status(404).send("File not found.");
    }
    // Delete the file from the database
    await CSV.deleteOne({ _id: fileId });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the file.");
  }
};

// controller for view csv file
module.exports.viewfile = async function (req, res) {
  try {
    const fileId = req.params.id;

    // Find the file by its unique identifier (fileId) in the database
    const file = await CSV.findById(fileId);

    if (!file) {
      return res.status(404).send("File not found.");
    }

    const records = [];
    const header = [];
    fs.createReadStream(file.filePath)
      .pipe(csvParser())
      .on("headers", (headers) => {
        headers.map((head) => {
          header.push(head);
        });
        // console.log(header);
      })
      .on("data", (data) => records.push(data))
      .on("end", () => {
        res.render("viewfile", {
          title: "CSV Reader",
          file: file.fileName,
          heading: header,
          data: records,
        });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred while retrieving the file.");
  }
};
