const polygonAPI = require("./seed_test_data/polygon-test");
const polygonAPI2 = require("./seed_test_data/polygon2-test");
const ESGdata = require("./seed_test_data/esg-test");
const Userdata = require("./seed_test_data/userdata-test");

const ESG = require("../schema/esgSchema");
const Polygon = require("../schema/polygonSchema");
const Users = require("../schema/usersSchema");

const mongoose = require("mongoose");

const uri = "INSER MONGO URI HERE";

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
    await Polygon.insertMany(polygonAPI2);
    console.log(`stock entries added`);

    await ESG.insertMany(ESGdata);
    console.log(`esg entries added`);

    await Users.insertMany(Users);
    console.log(`user entries added`);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
seedDB();
