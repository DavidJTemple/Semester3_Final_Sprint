const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

router.get("/",  (req, res) =>{
    res.render("id_search.ejs")
  })

  module.exports = router;