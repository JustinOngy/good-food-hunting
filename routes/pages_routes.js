const express = require("express");
const router = express.Router();
const db = require("../db");
const ensureLoggedIn = require("../middlewares/ensure_logged_in");

router.get("/", ensureLoggedIn, (req, res) => {
  console.log(req.session.userId);
  db.query("SELECT * FROM dishes order by title;", (err, dbRes) => {
    if (err) {
      console.log(err);
    }
    let dishes = dbRes.rows;

    res.render("home", { dishes: dishes });
  });
});
router.get("/about", ensureLoggedIn, (req, res) => {
  res.render("about");
});

module.exports = router;
