const User = require("../../models/user");
const Course = require("../../models/course");


module.exports = {
  courses: async () => {
    try {
      const courses = await Course.find();
      return courses;
    } catch (err) {
      throw err;
    }
  },
  createCourse: async (parent, args, context, info) => {
    /* if (!req.isAuth) {
      throw new Error("Unauthenticated user!");
    } */
    const course = new Course({
      title: args.courseInput.title,
      desc: args.courseInput.desc,
      price: +args.courseInput.price,
      img: args.courseInput.img,
      releaseDate: new Date(args.courseInput.releaseDate).toLocaleDateString(),
      creator: args.courseInput.creator
    });
    
    try {
      const createdCourse = await course.save();
      
      const courseOwner = await User.findById(args.courseInput.creator);

      if (!courseCreator) {
        throw new Error("User not found!");
      }
      courseOwner.owner.push(course);
      await courseCreator.save();

      return createdCourse;
    } catch (err) {
      console.log(err);
      throw err;
    } 
  },
};
