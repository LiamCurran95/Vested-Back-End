const uri = "INSERT MONGO URI HERE";
const Polygon = require("../schema/polygonSchema");
const mongoose = require("mongoose");

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
