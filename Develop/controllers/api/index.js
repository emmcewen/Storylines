const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newStoryRoutes = require ('./newStoryRoutes')
const continueStoryRoute = require ('./continueStoryRoutes')

router.use('/users', UserRoutes);
router.use('/newStory',newStoryRoutes)
router.use('/continueStory',continueStoryRoute)

module.exports = router;