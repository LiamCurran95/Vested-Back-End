const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const polygonSchema = new Schema(
  {
    ticker: {
      type: String,
      require: true,
    },
    averagePrice: {
      type: Number,
    },
    date: {
      type: String,
      // required: [true, "String is required"],
    },
  },
  {
    versionKey: false,
  }
);

const Polygon = mongoose.model("Polygon", polygonSchema);

module.exports = Polygon;
