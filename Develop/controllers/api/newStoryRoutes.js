const router = require('express').Router();
const { Story } = require('../../models');
const { continueStory } = require('../../models');

// route for publishing new story

router.post('/', async (req, res) => {
    try {
        const newStory = await Story.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newStory);
    } catch (err) {
        res.status(400).json(err)
    }

});

// add comment/ continue the story to add on to the story
router.post('/', aysnc(req, res) => {
    try {
        const continueStory = await Story.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(continueStory);
    } catch (err) {
        res.status(400).json(err)
    }

});

// delete story with story id

router.delete('/:id', aysnc(req, res) => {
    try {
        const storyData = await Story.destroy({
            where: {
                id: req.parasm.id,
                user_id: req.session.user_id,
            },
        });

        if(!storyData) {
            res.status(404).json({ message: 'No story found with this id!' });
            return;
        }
        res.status(200).json(storyData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router
