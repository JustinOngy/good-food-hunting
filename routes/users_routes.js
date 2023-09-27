const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("signup", (req, res) => {
    // req.body should contain email and password send by user 
    // insert a new user record
  res.redirect("/login");
});

module.exports = router;
