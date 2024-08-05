const express = require("express");
const app = express();
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/api/v1", router);

app.get("/", (req, res) => {
  console.log("Body request: " + req.body + "\n");
  console.log("URL request: " + req.params + "\n");
});

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
});
