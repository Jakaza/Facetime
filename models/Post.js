const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        max: 500
    },
    image:{
        type:String,
    },
    likes:{
        type:Array,
        default: []
    }},
    {timestamps: true});

//Export the model
module.exports = mongoose.model('Post', postSchema);