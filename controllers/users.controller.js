const { fetchUsers } = require("../models/users.model");

exports.getUsers = (req, res, next) => {
  fetchUsers()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};
