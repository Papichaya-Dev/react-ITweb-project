const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post');

//Review model 
const Review = require('../../models/Review');

//Profile model
const Profile = require('../../models/Proflie');

//Validation
const validatePostInut = require('../../validation/post')

//@route GET api/review
//@desc GET review
//@access Public
router.get('/', (req,res) => {
    Review.find()
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostfound: 'No news found '}));
})


//@route GET api/review/:id
//@desc GET review by id
//@access Public
router.get('/:id', (req,res) => {
    Review.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound: 'No news found with that id'}));
})


//@route POST api/review
//@desc POST review
//@access Public
router.post('/',passport.authenticate('jwt',{session: false}), (req,res) => {
    const {errors,isValid} = validatePostInut(req.body);
 
    //Check Validation
    if(!isValid) {
        //If any errors, send 400 with errors object
        return res.status(400).json(errors);  
    }
    
     const ReviewPost = new Review({
         text: req.body.text,
         title:req.body.title,
         content:req.body.content,
         
     });
 
     ReviewPost.save().then(review => res.json(review));
 });

//@route POST api/review/like/:id
//@desc Like review
//@access Private
router.post('/like/:id',passport.authenticate('jwt',{session:false}),(req,res) =>
    Profile.findOne({user: req.user.id})
        .then(profile => {
            Review.findById(req.params.id)
                .then(review => {
                   if(review.likes.filter(like => like.user.toString() ===  req.user.id).length > 0){
                       return res.status(400).json({alreadyliked: 'User already liked this post'});
                   }

                   //Add user id to like array
                   review.likes.unshift({ user:req.user.id });

                   review.save().then(review => res.json(review));
                })
                .catch(err => res.status(404).json({postnotfound: 'No post found'}))
        })
);


module.exports = router;