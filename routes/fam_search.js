if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


// const pg = require('pg');
const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
const censusDal = require("../services/census.dal");


router.use(express.static("public"));


router.get("/",  (req, res) =>{  // this is what pulls up the dropdown menu for 3 choices
console.log("here we are now")
    res.render("fam_search.ejs")
  })  

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


  

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.get(path)
  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "fam_search.ejs"))
  })
  
  app.get("/search", async function(req, res){

      const name = req.query.family_name;
      console.log(name)
      console.log(`family_name: ${name}`)
      // const results = await pool.query(`SELECT * FROM census WHERE family_name = ${name}`);
      const results = await pool.query("SELECT * FROM census WHERE family_name = $1", [name]);// this prevents query injection hack Bonus #2
      res.send(results.rows);
  })

  


  module.exports = router;