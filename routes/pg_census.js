const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ info: `Node.js and Express API` });
});

router.get("/", async (req, res) => {
  let allCensus = await censusDal.getAllCensus();
  if (allCensus.length === 0) res.render("norecord");
  else {
    res.render("pg_census.ejs", { allCensus });
  }
});

router.get("/:id", async (req, res) => {
  let allCensus = await censusDal.getCensusByFamilyName(req.params.family_name);
  if (allCensus.length === 0) res.render("norecord");
  else {
    res.render("pg_census.ejs", { allCensus });
  }
});

module.exports = router;
