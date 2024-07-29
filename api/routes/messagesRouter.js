const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.index);

router.post("/", messagesController.store);

module.exports = {
  router,
};
