exports.mongooseErrors = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send({ msg: "Bad request." });
  }
};
