const express = require("express");
let app = express();

app.get("/", (request, response) => {
  let date = new Date();
  response.send(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
});

app.listen(4000);

module.exports = app;
