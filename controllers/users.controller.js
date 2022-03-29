const {
  fetchUsers,
  fetchUserByUsername,
  updatePortfolioData,
  fetchPortfolioByUsername,
  addUserFormAnswers,
  createUser,
} = require("../models/users.model");

exports.getUsers = (req, res, next) => {
  fetchUsers()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  fetchUserByUsername(username)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postUserAnswers = (req, res, next) => {
  const { formResponses } = req.body;
  const { username, formAnswers } = req.params;
  addUserFormAnswers(username, formAnswers, formResponses)
    .then((result) => {
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getPortfolioByUsername = (req, res, next) => {
  const { username, portfolio } = req.params;
  fetchPortfolioByUsername(username, portfolio)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updatePortfolio = (req, res, next) => {
  const { username, portfolio } = req.params;
  const { tickers } = req.body;
  updatePortfolioData(username, portfolio, tickers)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postUser = (req, res, next) => {
  const newUsername = req.body.username;
  const newEmail = req.body.email;
  const newAvatarUrl = req.body.avatarUrl;
  const newUser = req.body.newUser;
  const newTheme = req.body.theme;
  const achievements = req.body.achievements;
  const emptyFormAnswers = {
    environmentalRating: 0,
    socialRating: 0,
    governanceRating: 0,
  };
  const emptyPortfolio = { tickers: [] };
  createUser(
    newUsername,
    newEmail,
    newAvatarUrl,
    newUser,
    newTheme,
    achievements,
    emptyFormAnswers,
    emptyPortfolio
  )
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};
