const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

//graphQL schema and functions
const typeDefs = require("./graphql/schema/typeDefs");
const resolvers = require("./graphql/resolvers/resolvers");
const isAuth = require('./middleware/auth');

const app = express();
app.use(bodyParser.json());

app.use(isAuth);

// apollo server setup
const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app:app});
  app.listen(5000, () => console.log("🚀 Apollo Server is running!"));
}
startServer();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1t7vp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("📚 Mongo DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });
