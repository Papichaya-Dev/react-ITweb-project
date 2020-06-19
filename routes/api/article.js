const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');

//Article model 
const Article = require('../../models/Article');

//Profile model
const Profile = require('../../models/Proflie');

//Validation
const validatePostInut = require('../../validation/post')

//@route GET api/article
//@desc GET article
//@access Public
router.get('/', (req,res) => {
    Article.find()
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostfound: 'No news found '}));
})


//@route GET api/article/:id
//@desc GET article by id
//@access Public
router.get('/:id', (req,res) => {
    Article.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound: 'No news found with that id'}));
})


//@route POST api/article
//@desc POST article
//@access Public
router.post('/',passport.authenticate('jwt',{session: false}), (req,res) => {
    const {errors,isValid} = validatePostInut(req.body);
 
    //Check Validation
    if(!isValid) {
        //If any errors, send 400 with errors object
        return res.status(400).json(errors);  
    }
    
     const ArticlePost = new Article({
         text: req.body.text,
         title:req.body.title,
         content:req.body.content,
         
     });
 
     ArticlePost.save().then(article => res.json(article));
 });

//@route POST api/news/like/:id
//@desc Like post
//@access Private
router.post('/like/:id',passport.authenticate('jwt',{session:false}),(req,res) =>
    Profile.findOne({user: req.user.id})
        .then(profile => {
            Article.findById(req.params.id)
                .then(article => {
                   if(article.likes.filter(like => like.user.toString() ===  req.user.id).length > 0){
                       return res.status(400).json({alreadyliked: 'User already liked this post'});
                   }

                   //Add user id to like array
                   article.likes.unshift({ user:req.user.id });

                   article.save().then(article => res.json(article));
                })
                .catch(err => res.status(404).json({postnotfound: 'No post found'}))
        })
);


module.exports = router;