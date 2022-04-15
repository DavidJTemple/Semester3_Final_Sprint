const express = require("express");
const router = express.Router();
router.use(express.static("public"));

const censusDal = require("../services/census.dal");

// router.get("/search", async (req, res) => {
//   let allCensus = await censusDal.getCensusByFamilyName(req.params.family_name);
//   if (allCensus.length === 0);
//   else {
//     res.write({ allCensus });
//     res.end();
//   }
// });
module.exports = router;
