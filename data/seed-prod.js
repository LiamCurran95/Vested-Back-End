const mongoose = require("mongoose");
const polygonAPI = require("./seed_prod_data/polygon");
const esgData = require("./seed_prod_data/esg");
const userData = require("./seed_prod_data/userdata");

const Esg = require("../schema/esgSchema");
const Polygon = require("../schema/polygonSchema");
const Users = require("../schema/usersSchema");
const { testUri } = require("../secretInfo");

const uri = process.env.MONGODB_URI || testUri;

const seedDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await mongoose.connection.db.dropCollection("polygons", () => {});
    await mongoose.connection.db.dropCollection("esgs", () => {});
    await mongoose.connection.db.dropCollection("users", () => {});

    await Polygon.insertMany(polygonAPI);
    await Esg.insertMany(esgData);
    await Users.insertMany(userData);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
seedDB();
