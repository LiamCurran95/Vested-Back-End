const { fetchPolygon } = require("../models/polygon.model");

exports.getPolygon = (req, res, next) => {
	fetchPolygon()
		.then((result) => {
			res.status(200).send({ result });
		})
		.catch((err) => {
			next(err);
		});
};
