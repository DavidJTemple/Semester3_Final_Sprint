const express = require("express");
const router = express.Router();
router.use(express.static("public"));

const censusDal = require("../services/census.dal");

router.get("/", (req, res) => {
  console.log("Here we are now!");
  // this is what pulls up the dropdown for 3 choices
  res.render("fam_search.ejs");
});

router.get("/search", async (req, res) => {
  var queryStr = require("url").parse(req.url, true).query;
  let allCensus = await censusDal.getCensusByFamilyName(queryStr.search);
  if (allCensus.length === 0) {
    console.log("Inside the inside");
    res.render("norecord");
  } else {
    res.render("search.ejs", { allCensus });
  }
});
module.exports = router;
