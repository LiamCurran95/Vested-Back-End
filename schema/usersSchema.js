const mongoose = require("mongoose");

const { Schema } = mongoose;

const formAnswers = new Schema({
	environmentalRating: { type: Number },
	socialRating: { type: Number },
	governanceRating: { type: Number },
});

const userPortfolios = new Schema({
	tickers: [String],
	createdAt: { type: Date, default: Date.now },
});

const usersSchema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		avatarUrl: { type: String, required: false },
		formAnswers1: formAnswers,
		formAnswers2: formAnswers,
		formAnswers3: formAnswers,
		portfolio1: userPortfolios,
		portfolio2: userPortfolios,
		portfolio3: userPortfolios,
		newUser: { type: Boolean, required: true, default: true },
		theme: { type: String, required: true, default: "light" },
	},
	{
		versionKey: false,
	}
);

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
