const { UserFavourites } = require('../models');

const userFavData = [
  {
    user_id: 1,
    recipe_id: 2,
  },
  {
    user_id: 1,
    recipe_id: 4,
  },
  {
    user_id: 1,
    recipe_id: 5,
  },
  {
    user_id: 2,
    recipe_id: 1,
  },
  {
    user_id: 2,
    recipe_id: 3,
  },
  {
    user_id: 2,
    recipe_id: 5,
  },
  {
    user_id: 3,
    recipe_id: 2,
  },
  {
    user_id: 3,
    recipe_id: 4,
  },
  {
    user_id: 4,
    recipe_id: 3,
  },
  {
    user_id: 4,
    recipe_id: 5,
  },
  {
    user_id: 5,
    recipe_id: 1,
  },
  {
    user_id: 5,
    recipe_id: 4,
  },
];

const seedUserFavourites = () => UserFavourites.bulkCreate(userFavData);

module.exports = seedUserFavourites;
