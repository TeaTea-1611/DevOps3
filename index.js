const express = require("express");
const app = express();

app.get("/users", function (req, res) {
  res.json({
    data: [
      {
        id: 1,
        name: "user01",
        age: 19,
      },
      {
        id: 2,
        name: "user02",
        age: 19,
      },
      {
        id: 3,
        name: "user03",
        age: 19,
      },
      {
        id: 4,
        name: "user04",
        age: 19,
      },
    ],
  });
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8083);
