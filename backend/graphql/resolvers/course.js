//const User = require("../../models/user");
const Course = require("../../models/course");

const { transformCourse } = require('./merge');

module.exports = {
  courses: async () => {
    try {
      const courses = await Course.find();
      return courses.map((course) => {
        return transformCourse(course);
      });
    } catch (err) {
      throw err;
    }
  },
  createCourse: async args => {
      const course = new Course({
          title : args.courseInput.title,
          desc : args.courseInput.desc,
          price : args.courseInput.price,
          img: args.courseInput.img,
          releaseDate : new Date(args.courseInput.releaseDate).toLocaleDateString()
      });
      let createdCourse;
      try {
        const result = await course.save();
        createdCourse = transformCourse(result);
        return createdCourse;
      } catch (err) {
          throw err;
      }
  }
};
