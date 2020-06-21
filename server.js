const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello Burgers2 !  🍔");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Its code your future");
});

app.get("/node", function (req, res) {
  res.send("Its node page ");
});

app.listen;
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
