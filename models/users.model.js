const mongoose = require("mongoose");
const { testUri } = require("../secretInfo");

const uri = process.env.MONGODB_URI || testUri;
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

exports.fetchPortfolioByUsername = async (username, portfolio) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const data = await User.findOne({
      username: username,
      portfolio,
    });
    return data[portfolio];
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
