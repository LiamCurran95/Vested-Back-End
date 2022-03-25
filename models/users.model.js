const mongoose = require("mongoose");

const { testUri } = require("../secretInfo");

const uri = testUri;
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

exports.addUserFormAnswers = async (username, formAnswers, formResponses) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const filter = { username };
    const update = { [formAnswers]: formResponses };
    const data = await User.findOneAndUpdate(filter, update, { returnOriginal: false });
    if (data === null) { return await Promise.reject({ status: 404, msg: "Invalid" }); }
    return data;
  } finally {
    await mongoose.connection.close();
  }
};
