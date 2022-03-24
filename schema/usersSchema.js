const mongoose = require("mongoose");

const { Schema } = mongoose;

const formAnswers = new Schema({
  environmentalRating: { type: Number },
  socialRating: { type: Number },
  governanceRating: { type: Number },
});

const userPortfolios = new Schema({
  any: Object,
  createdAt: { type: Date, default: Date.now },
});

const usersSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    avatarUrl: { type: String, required: false },
    form_answers1: formAnswers,
    form_answers2: formAnswers,
    form_answers3: formAnswers,
    portfolios1: userPortfolios,
    portfolios2: userPortfolios,
    portfolios3: userPortfolios,
    newUser: { type: Boolean, required: true, default: true },
    theme: { type: String, required: true, default: "light" },
  },
  {
    versionKey: false,
  }
);

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
