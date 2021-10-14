const Category = require("../../models/category");

module.exports = {
  categories: async () => {
    try {
      const categories = await Category.find();
      return categories.map((category) => {
        return {
          ...categories._doc,
          _id: category.id,
          name: category.name,
          subCategory: category.subCategory,
        };
      });
    } catch (err) {
      throw err;
    }
  },
};