const express = require("express");
const bodyParser = require("body-parser");
// const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");


const app = express();
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1t7vp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  ) 
  .then(() => {
    app.listen(5000);
    console.log("Mongo DB connected!")
  })
  .catch((err) => {
    console.log(err);
  });
