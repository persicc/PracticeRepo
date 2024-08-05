const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.index);
router.get("/:blogId", blogController.getById);
router.get("/create", blogController.create);

router.post("/", blogController.store);
router.delete("/delete/:blogId", blogController.deleteById);
router.put("/update/:blogId", blogController.updateById);

module.exports = {
  router,
};
