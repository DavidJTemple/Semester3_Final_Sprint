const express = require("express");
const router = express.Router();
const app = express();

const censusDal = require("../services/mongo_census.dal");

router.get("/", (req, res) => {
  res.render("mongo_census.ejs");
});

router.get("/fam_search_mdb", (req, res) => {
  res.render("fam_search_mdb.ejs");
});

router.post("/mongo_census/fam_search_mdb/:id", async (req, res) => {
  let result = await censusDal.getCensusByFamilyName(req.params.query);
  if (result == null) {
    console.log("not found");
  } else {
    console.log(result);
    res.json({ result });
  }
});

app.get("/search", async (req, res) => {
  let name = req.query.name;
  const results = await pool.query(
    `SELECT * FROM users WHERE name = $1 OR job = $2`,
    [name, job]
  );
  res.send(results.rows);
});

module.exports = router;
