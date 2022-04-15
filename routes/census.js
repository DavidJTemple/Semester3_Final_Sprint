const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

router.get("/", async (req, res) => {
  res.render("census.ejs");
});

<<<<<<< HEAD
// router.get("/search", async (req, res) => {
//   let allCensus = await censusDal.getCensusByFamilyName(req.params.family_name);
//   if (allCensus.length === 0) res.render("norecord");
//   else {
//     res.render("search.ejs", { allCensus });
//   }
// });
=======
router.get("/",  (req, res) =>{
  res.render("fam_search.ejs")
})

router.get("/",  (req, res) =>{
  res.render("id_search.ejs")
})

router.get("/",  (req, res) =>{
  res.render("prov_search.ejs")
})

router.get("/:id", async (req, res) => {
  let allCensus = await censusDal.getCensusByFamilyName(req.params.id);
  if (allCensus.length === 0) res.render("norecord");
  else {
    res.render("census.ejs", { allCensus });
  }
});
>>>>>>> bc5792f0e4be0d99134786c815dadaa434e137f3

module.exports = router;
