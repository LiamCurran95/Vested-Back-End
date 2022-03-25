const {
  fetchUsers,
  fetchUserByUsername,

  removePortfolioData,

  fetchPortfolioByUsername,
  addUserFormAnswers,
} = require('../models/users.model');

exports.getUsers = (req, res, next) => {
  fetchUsers()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
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

exports.emptyPortfolio = (req, res, next) => {
  const { username, portfolio } = req.params;
  removePortfolioData(username, portfolio)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};
