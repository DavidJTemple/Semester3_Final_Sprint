const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

router.get("/", async (req, res) => {
  res.render("census.ejs");
});

// router.get("/search", async (req, res) => {
//   let allCensus = await censusDal.getCensusByFamilyName(req.params.family_name);
//   if (allCensus.length === 0) res.render("norecord");
//   else {
//     res.render("search.ejs", { allCensus });
//   }
// });

module.exports = router;
