const Post = require('../models/Post')
const User = require('../models/User');
const router = require('express').Router()

router.get('/posts', async (req, res) =>{
    try{
        const posts = await Post.find()
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get Post
router.get('/posts/:id', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

// Create
router.post('/new-post', async (req, res) =>{

    const newPost = new Post(req.body)
    try{
        const post = await newPost.save()
        res.status(200).json(post)

    }catch(err){
        res.status(500).json(err)
    }
})

// Delete Post
router.delete('/posts/:id', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id)

        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Post has been successfully deleted')
        }else{
            res.status(403).json('You can only delete your post')
        }

    }catch(err){
        res.status(500).json(err)
    }
})
// Update Post
router.put('/posts/:id', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.id)

        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json('Post has been successfully updated')
        }else{
            res.status(403).json('You can only update your post')
        }

    }catch(err){
        res.status(500).json(err)
    }
})
// Like/Dislike Post
router.put('/posts/:id/like', async (req, res) =>{
    const currentUserId = req.body.userId
    try{
        const post = await Post.findById(req.params.id)

        if(!post.likes.includes(currentUserId)){
            await post.updateOne({$push: {likes:currentUserId }})
            res.status(200).json('Post has been succesfully liked')
        }else{
            await post.updateOne({$pull: {likes:currentUserId }})
            res.status(200).json('Post has been succesfully disliked')
        }

    }catch(err){
        res.status(500).json(err)
    }
})

// Feeds

router.get('/feeds', async (req, res) =>{

    try{
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId: currentUser._id})

        const friendsPosts = await Promise.all(
            currentUser.followins.map((friendId) =>{
                return Post.find({userId: friendId})
            })
        )

        res.status(200).json(friendsPosts)

    }catch(err){
        res.status(500).json(err)
    }


})


module.exports = router