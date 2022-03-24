const mongoose = require("mongoose");
const { testUri } = require("../secretInfo");

const uri = testUri;
const Esg = require("../schema/esgSchema");

exports.fetchESG = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = await Esg.find({});
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
