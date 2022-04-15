const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

<<<<<<< HEAD
router.get("/", (req, res) => {
  res.render("id_search.ejs");
});

module.exports = router;
=======
router.get("/",  (req, res) =>{
    res.render("id_search.ejs")
  })

  module.exports = router;
>>>>>>> bc5792f0e4be0d99134786c815dadaa434e137f3
