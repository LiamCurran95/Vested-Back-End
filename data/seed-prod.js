const polygonAPI = require("./seed_prod_data/polygon");
const polygonAPI2 = require("./seed_prod_data/polygon2");
const ESGdata = require("./seed_prod_data/esg");
const Userdata = require("./seed_prod_data/userdata");

const ESG = require("../schema/esgSchema");
const Polygon = require("../schema/polygonSchema");
const Users = require("../schema/usersSchema");

const mongoose = require("mongoose");

const uri = "INSERT MONGO URI HERE";

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

    await Users.insertMany(Userdata);
    console.log(`user entries added`);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
seedDB();
