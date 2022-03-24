exports.invalidUrlError = (res) => {
  res.status(404).send({ message: "Invalid URL Passed" });
};

exports.methodError = (res) => {
  res.status(405).send({ message: "Method not allowed on this route" });
};
