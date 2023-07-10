// importing Packages
const express = require("express");

const port = 5000;
const app = express();

const db = require("./config/mongoose");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("./assets"));

app.use(expressLayouts);

// use express router
app.use("/", require("./routes"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${port}`);
  }

  console.log(`Server is up and running on port : ${port}`);
});
