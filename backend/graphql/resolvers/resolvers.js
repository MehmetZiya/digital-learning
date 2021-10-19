
const { courses, createCourse } = require("./course");
const { createUser, login } = require("./user")


const resolvers = {
    Query: {
        courses,
        login
    },
    Mutation: {
      createCourse,
      createUser
    }
}
  module.exports = resolvers;