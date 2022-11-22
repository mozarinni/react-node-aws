const express = require("express");
const router = express.Router();

// import middlewares
const {
  authMiddleware,
  adminMiddleware,
  requireSignin,
} = require("../controllers/auth");

// import controllers
const { read } = require("../controllers/user");

// routes
router.get("/user", requireSignin, authMiddleware, read);
router.get("/admin", requireSignin, adminMiddleware, read);

module.exports = router;
