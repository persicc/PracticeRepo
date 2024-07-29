const express = require("express");
const router = express.Router();

const homeRouter = require("./homeRouter");
const usersRouter = require("./usersRouter");
const blogRouter = require("./blogRouter");
const messagesRouter = require("./messagesRouter");
const authRouter = require("./autController");

router.use(["/", "/users", "/blog", "/messages"], authRouter);

router.use("/", homeRouter);
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/blog", blogRouter);
router.use("/messages", messagesRouter);

module.exports = {
  router,
};
