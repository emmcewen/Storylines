const router = require ('express').Router();
const { ContinueStory } = require('../../models');

// add comment/ continue the story to add on to the story

router.post('/:Id/comments', aysnc(req, res) => {
    // try {
    //     const ContinueStory = await ContinueStory.create({
    //         ...req.body,
    //         user_id: req.session.user_id,
    //     });
    //     res.status(200).json(continueStory);
    // } catch (err) {
    //     res.status(400).json(err)
    // }
    const comment =new Comment (req.body);
    comment
    .save()
    // Redirect to the root
    .then(()=> res.direct('/'))
    .catch((err)=>{
        console.log(err);
    });

});


Index.js

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newStoryRoutes = require ('./newStoryRoutes')
const continueStoryRoute = require ('./continueStoryRoutes')

router.use('/users', UserRoutes);
router.use('/newStory',newStoryRoutes)
router.use('/continueStory',continueStoryRoute)

module.exports = router;