const User = require("../../models/user");
const Course = require("../../models/course");

const { transformCourse } = require("./merge");

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
  createCourse: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated user!");
    }
    const course = new Course({
      title: args.courseInput.title,
      desc: args.courseInput.desc,
      price: +args.courseInput.price,
      img: args.courseInput.img,
      releaseDate: new Date(args.courseInput.releaseDate).toLocaleDateString(),
      creator: req.userId
    });
    let createdCourse;
    try {
      const result = await course.save();
      createdCourse = transformCourse(result);
      const courseCreator = await User.findById(req.userId);
      if (!courseCreator) {
        throw new Error("User not found!");
      }
      courseCreator.owner.push(course);
      await courseCreator.save();

      return createdCourse;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
