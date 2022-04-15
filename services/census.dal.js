const dal = require("./postgres_db");

const getAllCensus = () => {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM census ORDER BY family_name ASC";
    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

const getCensusByFamilyName = (family_name) => {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM census WHERE family_name = $1";
    dal.query(sql, [family_name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};



module.exports = {
  getAllCensus,
  getCensusByFamilyName,
};
