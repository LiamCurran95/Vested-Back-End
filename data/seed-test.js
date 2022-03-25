const seedDB = async () => {
  const polygonAPI = require('./seed_test_data/polygon-test');
  const esgData = require('./seed_test_data/esg-test');
  const userData = require('./seed_test_data/userdata-test');

  const Esg = require('../schema/esgSchema');
  const Polygon = require('../schema/polygonSchema');
  const Users = require('../schema/usersSchema');
  const { testUri } = require('../secretInfo');

  const uri = testUri;
  const mongoose = require('mongoose');

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await mongoose.connection.db.dropCollection('polygons', () => {});
    await mongoose.connection.db.dropCollection('esgs', () => {});
    await mongoose.connection.db.dropCollection('users', () => {});

    await Polygon.insertMany(polygonAPI);
    await Esg.insertMany(esgData);
    await Users.insertMany(userData);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};

module.exports = seedDB;
