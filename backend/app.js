const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

//graphQL schema and functions
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');


const app = express();
app.use(bodyParser.json());

// graphQL setup
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);


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
