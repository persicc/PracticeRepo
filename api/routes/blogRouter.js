const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.index);
router.get("/:blogId", blogController.getOne);
router.get("/create", blogController.create);

router.post("/store", blogController.store);

module.exports = {
  router,
};
