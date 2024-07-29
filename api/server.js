const express = require("express");
const app = express();
const router = require("./routes/index");

app.use("/", router);

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
});
