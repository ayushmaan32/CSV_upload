// Importing mongoose
const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CSV", csvSchema);
