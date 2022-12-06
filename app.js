const express = require("express");
const cors = require("cors");
var mysql = require("mysql");

let connection = null;

function connectToDB() {
  var connection = mysql.createConnection({
    host: "185.28.21.52",
    user: "u456860955_Jesse72521",
    password: "Kramer1!",
    database: "u456860955_blindDB",
  });
  return connection;
}

const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/getTastings", (req, res) => {
  console.log("getTastings");
  connection = connectToDB();
  // connection.query(
  //   `SELECT * FROM tastings WHERE unique_code = '${req.query.uniqueCode}'`,
  //   function (err, rows, fields) {
  //     if (err) throw err;
  //     if (rows.length > 0) {
  //       res.json({ status: 200, error: null, response: rows[0] });
  //     } else {
  //       res.json({
  //         status: 404,
  //         error: "No tasting found",
  //         response: "No tasting found",
  //       });
  //     }
  //   }
  // );
  connection.end();
});

app.listen("3006", () => {
  console.log("Server started on port 3006");
});
