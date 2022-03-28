const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());

//ERRORS
const errors = require("./controllers/errors.controller");

//POLYGON
const { getPolygon } = require("./controllers/polygon.controller");

//ESG
const { getESG } = require("./controllers/esg.controller");

//USERS
const {
  getUsers,
  getUserByUsername,
  emptyPortfolio,
  postUserAnswers,
  getPortfolioByUsername,
  postUser,
} = require("./controllers/users.controller");

//POLYGON
app.get("/api/polygon", getPolygon);

//ESG
app.get("/api/ESG", getESG);

//USERS
app.get("/api/users", getUsers);
app.get("/api/users/:username", getUserByUsername);
app.get("/api/:username/:portfolio", getPortfolioByUsername);
app.patch("/api/:username/:portfolio", emptyPortfolio);
app.patch("/api/users/:username/:formAnswers", postUserAnswers);
app.post("/api/users", postUser);

app.listen(process.env.PORT || 9090, () => {
  console.log("Server online..");
});

app.use(errors.mongooseErrors);

module.exports = app;
