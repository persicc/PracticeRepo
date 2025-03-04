const express = require("express");
const app = express();
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1", router);

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
});
