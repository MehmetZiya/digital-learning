const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  img: {
    type: String,
  },
  wishList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    },
  ],
  purchased: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    },
  ],
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    },
  ]
});

module.exports = mongoose.model("User", userSchema);
