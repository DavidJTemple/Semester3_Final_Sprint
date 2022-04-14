if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const pg = require('pg');
const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
router.use(express.static("public"));


router.get("/",  (req, res) =>{  // this is what pulls up the dropdown menu for 3 choices
    res.render("fam_search.ejs")
  })

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  
  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname, "fam_search.ejs"))
  })
  
  app.get("/search", async function(req, res){
      const name = req.query.family_name;
      console.log(`family_name: ${name}`)
     
      const results = await pool.query("SELECT * FROM census WHERE family_name = $1", [name]);
      res.send(results.rows);
  })

  


  module.exports = router;