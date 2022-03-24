const mongoose = require("mongoose");

const { Schema } = mongoose;

const esgSchema = new Schema(
  {
    ticker: String,
    environmentScore: Number,
    socialScore: Number,
    governanceScore: Number,
    environmentLevel: String,
    socialLevel: String,
    governanceLevel: String,
    name: String,
    exchangeSymbol: String,
    total: Number,
  },
  {
    versionKey: false,
  },
);

const Esg = mongoose.model("esg", esgSchema);

module.exports = Esg;
