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
    
  },
  img: {
    type: String,
    
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
    type: String,
   
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }, 
});

module.exports = mongoose.model("Course", courseSchema);
