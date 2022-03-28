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
		const data = await User.findOneAndUpdate(filter, update, {
			returnOriginal: false,
		});
		if (data === null) {
			return await Promise.reject({ status: 404, msg: "Invalid" });
		}
		return data;
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

exports.removePortfolioData = async (username, portfolio) => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const filter = { username };
		const update = { [portfolio]: { tickers: [] } };

		const data = await User.findOneAndUpdate(filter, update, {
			returnOriginal: false,
		});
		return data[portfolio];
	} catch (error) {
		console.log(error);
	} finally {
		await mongoose.connection.close();
	}
};

exports.createUser = async (
  newUsername,
  newEmail,
  newAvatarUrl,
  newUser,
  newTheme,
  achievements,
  form_answers,
  emptyFormAnswers,
  emptyPortfolio
) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await User.create({
      username: newUsername,
      email: newEmail,
      newUser: newUser,
      avatarUrl: newAvatarUrl,
      newTheme: newTheme,
      formAnswers1: form_answers,
      formAnswers2: emptyFormAnswers,
      formAnswers3: emptyFormAnswers,
      portfolio1: emptyPortfolio,
      portfolio2: emptyPortfolio,
      portfolio3: emptyPortfolio,
    });
    const result = "New User Created";
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
};
