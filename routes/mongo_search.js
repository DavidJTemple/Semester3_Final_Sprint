const express = require("express");
const router = express.Router();
const {  getByFamilyName } = require("../services/mongo_search.dal");

router.get("/", async (req, res) => {
  console.log("inside landing page of mongo search")
  
  // console.log(results);


  res.render("mongo_search.ejs");
});

router.get("/search",async (req, res) => {
  var queryStr = require("url").parse(req.url, true).query;
  console.log("results")
  let results = await getByFamilyName(queryStr.search)
  console.log(results)
  res.render("mongo_results.ejs", { results });;
});

module.exports = router;



// const express = require("express");
// const router = express.Router();

// const censusDal = require("../services/mongo_census.dal");

// router.get("/", async (req, res) => {
//   let allCensus = await censusDal.getAllCensus();
//   if (allCensus.length === 0) res.render("norecord");
//   else {
//     res.render("mongo_census.ejs", { allCensus });
//   }
// });

// router.get("/:id", async (req, res) => {
//   let allCensus = await censusDal.getCensusByFamilyName(req.params.id);
//   if (allCensus.length === 0) res.render("norecord");
//   else {
//     res.render("mongo_census.ejs", { allCensus });
//   }
// });

// module.exports = router;