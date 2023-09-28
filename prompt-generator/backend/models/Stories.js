const mongoose = require('mongoose');
const { Schema } = mongoose;

const storySchema = new Schema({
    Prompt:{
        type:String,
        required:true
    },
    Story:{
        type:String,
        required:true
    },
    upVote:{
        type:Number,
        default:0
    }},
    {
        versionKey:false,
    }
);

module.exports = mongoose.model('story',storySchema);
