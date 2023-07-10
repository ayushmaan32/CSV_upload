const File = require("../models/csv");
// controller for home page
module.exports.home = async function (req, res) {
  try {
    let file = await File.find({});
    return res.render("home", {
      csvfiles: file,
      title: "CSV Reader",
    });
  } catch (error) {
    console.log("Error in loading page", error);
    return;
  }
};
