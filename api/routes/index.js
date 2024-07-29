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

// GET api/v1/

// GET api/v1/users/
// GET api/v1/users/
// GET api/v1/users/1

// GET api/v1/messages/
// GET api/v1/messages/create

// GET api/v1/blog/
// GET api/v1/blog/1
// GET api/v1/blog/create

// ------------------------------------------

// POST api/v1/users/
// POST api/v1/users/update
// POST api/v1/users/delete

// POST api/v1/messages/

// POST api/v1/blog/
// POST api/v1/blog/update
// POST api/v1/blog/delete
