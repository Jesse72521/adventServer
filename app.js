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
  connection = connectToDB();
  let body = req.body;
  console.log("test");
  console.log(body);

  // DELETE from tastings WHERE name=${body.selected}
  connection.query(
    `DELETE from tastings WHERE tastings.name='${body.selected}'`
  );

  var sql = `INSERT into tastings (name, day, notes, guesses, rating) VALUES ?`;
  var values = [];
  for (var i = 1; i < 13; i++) {
    value = [
      body.selected,
      body.days[i].day,
      body.days[i].note,
      body.days[i].guess,
      body.days[i].rating,
    ];
    values.push(value);
  }
  connection.query(sql, [values], function (err, rows, fields) {
    if (err) throw err;
    res.json({ status: 200, error: null, response: "success" });
  });

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
  connection = connectToDB();
  connection.query(
    `SELECT * FROM tastings WHERE name = '${req.query.name}'`,
    function (err, rows, fields) {
      if (err) throw err;
      res.json({ status: 200, error: null, response: rows });
    }
  );
  connection.end();
});

app.listen(process.env.PORT || "3006", () => {
  console.log("Server started");
});
