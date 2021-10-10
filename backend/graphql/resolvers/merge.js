
const User = require('../../models/user');
const Course = require('../../models/course');
const { dateToString } = require('../../helpers/date');

const courses = async courseIds => {
    try {
      const courses = await Course.find({ _id: { $in: courseIds } });
      return courses.map(course => {
        return transformCourse(course);
      });
    } catch (err) {
      throw err;
    }
  };

const user = async userId => {
    try {
      const user = await User.findById(userId);
      return {
        ...user._doc,
        _id: user.id,
        owner: courses.bind(this, user._doc.owner)
      };
    } catch (err) {
      throw err;
    }
  };


const transformCourse = course => {
    return {
      ...course._doc,
      _id: course.id,
      releaseDate: dateToString(course._doc.date),
      owner: user.bind(this, course.owner)
    };
  };

  exports.transformCourse = transformCourse;