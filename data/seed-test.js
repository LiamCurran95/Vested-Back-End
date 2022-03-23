const polygonAPI = require("./seed_test_data/polygon-test");
const esgData = require("./seed_test_data/esg-test");
const userData = require("./seed_test_data/userdata-test");

const ESG = require("../schema/esgSchema");
const Polygon = require("../schema/polygonSchema");
const Users = require("../schema/usersSchema");

const mongoose = require("mongoose");

const uri = "INSERT URI";

const seedDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		await Polygon.deleteMany({});
		await ESG.deleteMany({});
		await Users.deleteMany({});

		await Polygon.insertMany(polygonAPI);
		console.log(`stock entries added`);

		await ESG.insertMany(esgData);
		console.log(`esg entries added`);

		await Users.insertMany(userData);
		console.log(`user entries added`);
	} catch (error) {
		console.log(error);
	} finally {
		await mongoose.connection.close();
	}
};
seedDB();
