const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
	getPortfolioByUsername,
	postUserAnswers,
	postUser,
	updatePortfolio,
} = require("./controllers/users.controller");

//POLYGON
app.get("/api/polygon", getPolygon);

//ESG
app.get("/api/ESG", getESG);

//USERS
app.get("/api/users", getUsers);
app.get("/api/users/:username", getUserByUsername);
app.get("/api/:username/:portfolio", getPortfolioByUsername);
app.patch("/api/:username/:portfolio", updatePortfolio);
app.patch("/api/users/:username/:formAnswers", postUserAnswers);
app.post("/api/users", postUser);

app.listen(process.env.PORT || 9090, () => {
	console.log("Server online..");
});

app.use(errors.mongooseErrors);
app.all("/api/*", errors.handler404);

module.exports = app;
