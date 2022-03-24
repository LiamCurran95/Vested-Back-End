const { fetchESG } = require("../models/esg.model");

exports.getESG = (req, res, next) => {
  fetchESG()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};
