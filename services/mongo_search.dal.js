// const dal = require("./mongodb_db");

const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
const express = require ('express');
const app = express();
// async function getEverything() {
//   await client.connect();
//   const cursor = client
//     .db("Census")
//     .collection("census")
//     .find();
//   const results = await cursor.toArray();

//   if (results.length > 0) {
//       console.log(`Found the families of mongo search.dal`);
//       results.forEach((results, i) => {
//           console.log();
//           console.log(`Dataset Name: ${results.name}`);
//           console.log(results.description);
//           console.log(`     last updated date: ${results.last_updated}`);
//         //   console.log(`     location: ${results.geographic_region.country}, ${results.geographic_region.jurisdiction}`);
//         //    console.log(`     contact: ${results.contact.information}, email: ${results.contact.email}`);
//       });
//   } else {
//       console.log(`No families found'`);
//   }
//   return results;
// }
async function getByFamilyName(name) {
  app.set("view-engine", "ejs");
  console.log(`Found the families now`);
  await client.connect();
  const cursor = client
    .db("Census")
    .collection("census")
    .find({ family_name: name });
  const results = await cursor.toArray();

  return results;
}

module.exports = {
 
  getByFamilyName,
};

// const sort = { length:1 };

// async function getAllCensus() {
//   try {
//     await dal.connect();
//     const cursor = dal.db("sprint").collection("census").find().sort(sort);
//     const results = await cursor.toArray();
//     return results;
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function getCensusByEmail(email) {
//   try {
//     await dal.connect();
//     const result = dal
//       .db("sprint")
//       .collection("census")
//       .findOne({ email: email });
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function getCensusById(id) {
//   try {
//     await dal.connect();
//     const result = dal.db("sprint").collection("census").findOne({ _id: id });
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getCensusByFamilyName(family_name) {
//   try {
//     await dal.connect();
//     const cursor = dal
//       .db("sprint")
//       .collection("census")
//       .find({ family_name: family_name });
//     const results = await cursor.toArray();
//     return results;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function addCensus(name, email, password, uuidv4) {
//   let newLogin = JSON.parse(
//     `{ "census_year": "` +
//     census_year +
//       `", "household_id": "` +
//       household_id +
//       `", "family_name": "` +
//       password +
//       `", "uuid": "` +
//       uuidv4 +
//       `" }`
//   );
//   try {
//     await dal.connect();
//     const result = await dal
//       .db("sprint")
//       .collection("census")
//       .insertOne(newCensus);
//     return result.insertedId;
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = {
//   getAllCensus,
//   getCensusByEmail,
//   getCensusById,
//   getCensusByFamilyName,
// };
