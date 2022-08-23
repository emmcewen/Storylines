const router = require ('express').Router();
const { ContinueStory } = require('../../models');


// add comment/ continue the story to add on to the story

router.post('/stories/:storyId/continuestory', (req, res) => {

    const continueStory = new ContinueStory (req.body);
    continueStory
    .save()
    .then(()=> ContinueStory.findById(req.params.StoryId))
    // Redirect to the root
    .then(()=> res.redirect('/'))
    .catch((err)=>{
        console.log(err);
    });

});

module.exports=router;