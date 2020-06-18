const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');

//News model 
const News = require('../../models/News');

//Profile model
const Profile = require('../../models/Proflie');

//Validation
const validatePostInut = require('../../validation/post')

//@route GET api/news
//@desc GET news
//@access Public
router.get('/', (req,res) => {
    News.find()
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostfound: 'No news found '}));
})


//@route GET api/news/:id
//@desc GET news by id
//@access Public
router.get('/:id', (req,res) => {
    News.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound: 'No news found with that id'}));
})


//@route POST api/news
//@desc POST news 
//@access Public
router.post('/',passport.authenticate('jwt',{session: false}), (req,res) => {
    const {errors,isValid} = validatePostInut(req.body);
 
    //Check Validation
    if(!isValid) {
        //If any errors, send 400 with errors object
        return res.status(400).json(errors);  
    }
    
     const newsPost = new News({
         text: req.body.text,
         title:req.body.title,
         content:req.body.content,
         user: req.user.id
     });
 
     newsPost.save().then(news => res.json(news));
 });

//@route POST api/news/like/:id
//@desc Like post
//@access Private
router.post('/like/:id',passport.authenticate('jwt',{session:false}),(req,res) =>
    Profile.findOne({user: req.user.id})
        .then(profile => {
            News.findById(req.params.id)
                .then(news => {
                   if(news.likes.filter(like => like.user.toString() ===  req.user.id).length > 0){
                       return res.status(400).json({alreadyliked: 'User already liked this post'});
                   }

                   //Add user id to like array
                   news.likes.unshift({ user:req.user.id });

                   news.save().then(post => res.json(news));
                })
                .catch(err => res.status(404).json({postnotfound: 'No post found'}))
        })
);


module.exports = router;