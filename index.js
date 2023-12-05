const express = require("express");
const app = express();

app.get("/users", function (req, res) {
  res.json({
    data: [
      {
        id: 1,
        name: "user01"
      },
      {
        id: 2,
        name: "user02"
      }
    ]
  })
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8083);
