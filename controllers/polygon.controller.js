const { fetchPolygon } = require("../models/polygon.model");

exports.getPolygon = (req, res, next) => {
	fetchPolygon()
		.then((result) => {
			res.status(200).send({ result: result });
		})
		.catch((err) => {
			next(err);
		});
};
