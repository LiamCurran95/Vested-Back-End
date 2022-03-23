const express = require("express");

const app = express();
app.use(express.json());

const { getPolygon } = require("./controllers/polygon.controller");

app.use("/api/polygon", getPolygon);

app.listen(process.env.port || 9090, () => {
  console.log("Server online..");
});

module.exports = app;
