const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  totalEnrolled: {
    type: Number
  },
  rating: {
    type: Number
  },
  totalRate : {
    type: Number
  },
  releaseDate: {
    type: Date,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
});

module.exports = mongoose.model("Course", courseSchema);
