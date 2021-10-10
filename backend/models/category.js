const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategory = new Schema({ name: {type :String}});

const categorySchema = new Schema({
  name : { type: String},
  subCategory : [subCategory],
});

module.exports = mongoose.model("Category", categorySchema);

