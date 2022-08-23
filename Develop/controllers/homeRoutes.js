const router = require('express').Router();
const { NewStory, User, ContinueStory} = require ('../models');
const withAuth = require ('../utils/auth');

router.get('/', async (req, res)=>{
    res.render('login')
}) 

router.get('/newstory', async (req,res)=>{
    try {
        const storyData = await NewStory.findAll({
            include: [
                {
                    model:User,
                    attributes: ['username'],
                },
            ],
        });

        const stories = storyData.map((story)=> story.get({plain:true}));
        console.log(stories)
        res.render('homepage', {
            stories,
            logged_in:req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/story/:id', async (req,res)=> {
    try {
        const storyData = await NewStory.findByPk(req.params.id, {
            include: [
                {
                    model:User,
                    attributes: ['name'],
                },
            ],
        });

        const stories = storyData.get({plain: true});

        res.render('stories',{
            ...stories,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: NewStory }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
