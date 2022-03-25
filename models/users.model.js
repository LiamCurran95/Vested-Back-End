const mongoose = require("mongoose");
const { testUri } = require("../secretInfo");

const uri = process.env.MONGODB_URI;
const User = require("../schema/usersSchema");

exports.fetchUsers = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const data = await User.find({});
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};

exports.fetchUserByUsername = async (username) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const data = await User.findOne({ username });
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
