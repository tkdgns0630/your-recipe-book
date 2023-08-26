const router = require('express').Router();
const { Recipe } = require('../../models');


router.post('/add', withAuth, async (req, res) => {
    try {
      const newRecipe = await Recipe.create({
        ...req.body,
        userId: req.session.user_id,
      });
  
      res.status(200).json(newRecipe);
    } catch (err) {
      res.status(400).json(err);
    }
  });