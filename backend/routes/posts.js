const express = require("express");



const Post = require('../models/post');

const router = express.Router();





  
router.post('', (req, res, next) => {
    const post = new Post({
        username: req.body.username,
        password: req.body.password
        
    });
    post.save().then(createPost =>{
         console.log(createPost);
   
    res.status(201).json({
        message: 'post done',
         postId: createPost._id
    });
    });

    });

    router.put("/:id", (req, res, next) => {
        const post = new Post({
            _id: req.body.id,
            username: req.body.username,
            password: req.body.password
        });
        Post.updateOne({ _id: req.params.id }, post).then(result => {
        console.log(result);
        res.status(200).json({
            message: "update done"
        });
        });
    });

    router.get('',(req, res, next) => {
    Post.find().then(documents =>{
        res.status(200).json({
        message: 'post send successfully',
        posts: documents
    });
});
       
    });

    router.get("/:id", (req, res, next) =>{
        Post.findById(req.params.id).then(post =>{
            if(post){
                res.status(200).json(post);
            }else{
                res.status(404).json({ message: "Data not found"})
            }
        });
    });

    router.delete("/:id", (req, res, next) =>{
    Post.deleteOne({ _id: req.params.id})
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "post deleted"
            });
    });
    
    });
    module.exports = router;
