const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.index);
router.get("/:userId", usersController.getOne);
router.get("/create", usersController.create);

router.post("/", usersController.store);
router.put("/update/:userId", usersController.update);
router.delete("/delete/:userId", usersController.deleteUser);

module.exports = {
  router,
};
