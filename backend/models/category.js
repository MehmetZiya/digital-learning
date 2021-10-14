const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
const subCategory = new Schema({ name: { type: String } })

const categorySchema = new Schema({
    name: { type: String },
    subCategory: [subCategory],
=======
const subCategory = new Schema({ name: {type :String}});

const categorySchema = new Schema({
  name : { type: String},
  subCategory : [subCategory],
>>>>>>> dev
});

module.exports = mongoose.model("Category", categorySchema);

