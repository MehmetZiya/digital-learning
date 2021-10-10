const userResolver = require('./user');
const courseResolver = require('./course');


const rootResolver = {
  ...userResolver,
  ...courseResolver,
};

module.exports = rootResolver;