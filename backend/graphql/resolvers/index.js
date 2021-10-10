const userResolver = require('./user');
const courseResolver = require('./course');
const categoryResolver = require('./category');


const rootResolver = {
  ...userResolver,
  ...courseResolver,
  ...categoryResolver,
};

module.exports = rootResolver;