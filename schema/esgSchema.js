const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const esgSchema = new Schema(
  {
    esg_id: Number,
    company_name: String,
    exchange_symbol: String,
    stock_symbol: String,
    environment_grade: String,
    environment_level: String,
    social_grade: String,
    social_level: String,
    governance_grade: String,
    governance_level: String,
    total_grade: String,
    total_level: String,
    last_processing_date: String,
    environment_score: Number,
    social_score: Number,
    governance_score: Number,
    total: Number,
  },
  {
    versionKey: false,
  }
);

const Esg = mongoose.model("esg", esgSchema);

module.exports = Esg;
