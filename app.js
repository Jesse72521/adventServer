const express = require("express");
const cors = require("cors");
var mysql = require("mysql");

let connection = null;

function connectToDB() {
  var connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b23a7477886fbe",
    password: "d1e7a9f3",
    database: "heroku_5d0f9c82887f519",
  });
  return connection;
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./frontend"));

app.post("/saveTastings", (req, res) => {
  console.log("saveTastings");
  connection = connectToDB();
  let body = req.body;
  // connection.query(
  //   `INSERT into tastings (first_label, second_label, first_actual, second_actual, unique_code) VALUES('${body.firstLabel}', '${body.secondLabel}', '${body.firstAnswer}', '${body.secondAnswer}', '${body.uniqueCode}')`,
  //   function (err, rows, fields) {
  //     if (err) throw err;
  //     res.json({ status: 200, error: null, response: rows });
  //   }
  // );
  connection.end();
});

app.get("/getAllTastingsByName", (req, res) => {
  console.log("getTastings");
  connection = connectToDB();
  console.log(req.query.name);
  connection.query(
    `SELECT * FROM tastings WHERE name = '${req.query.name}'`,
    function (err, rows, fields) {
      if (err) throw err;
      if (rows.length > 0) {
        res.json({ status: 200, error: null, response: rows });
      } else {
        res.json({
          status: 404,
          error: "No tasting found",
          response: "No tasting found",
        });
      }
    }
  );
  connection.end();
});

app.listen(process.env.PORT || "3006", () => {
  console.log("Server started");
});
