const mongoose = require("mongoose");
const { testUri } = require("../secretInfo");

const uri = testUri;
const Polygon = require("../schema/polygonSchema");

exports.fetchPolygon = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = await Polygon.find({});
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
