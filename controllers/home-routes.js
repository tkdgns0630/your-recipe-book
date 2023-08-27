const router = require('express').Router();
const { Category, Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// route to get all categories and recipies
router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in;
  const categoryData = await Category.findAll();
  const recipeData = await Recipe.findAll();
  const categories = categoryData.map((category) =>
    category.get({ plain: true })
  );
  const recipes = recipeData.map((recipie) => recipie.get({ plain: true }));
  res.render('all', { recipes, categories, logged_in: loggedIn });
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: UserFavourites }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
module.exports = router;
