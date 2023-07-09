const express = require("express");

const port = 8000;

const db = require("./config/mongoose");

const app = express();

// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${port}`);
  }

  console.log(`Server is up and running on port : ${port}`);
});
