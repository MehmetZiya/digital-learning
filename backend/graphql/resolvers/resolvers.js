const Course = require("../../models/course");
const User = require("../../models/user");
const { courses, createCourse } = require("./course");

const resolvers = {
    Query: {
        courses
    },
    Mutation: {
      createCourse
    }
}
  module.exports = resolvers;