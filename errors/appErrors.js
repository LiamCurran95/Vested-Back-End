exports.invalidUrlError = (req, res) => {
  res.status(404).send({ message: "Invalid URL Passed" });
};

exports.methodError = (req, res, next) => {
  res.status(405).send({ message: "Method not allowed on this route" });
};
