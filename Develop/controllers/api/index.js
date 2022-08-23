const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newStoryRoutes = require ('./newStoryRoutes')
const continueStoryRoute = require ('./continueStoryRoute')

router.use('/users', userRoutes);
router.use('/newStory',newStoryRoutes)
router.use('/continueStory',continueStoryRoute)

module.exports = router;