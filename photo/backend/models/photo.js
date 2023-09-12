import mongoose from 'mongoose';

/*define the mongoose schema and return a model for a photo */

/* photos have comments ane we stored them in the photo object itself using this Schema*/
const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

});

// create a schema for photo
const photoSchema = mongoose.Schema({
    file_name: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    comments: [commentSchema],
    mentions: [String],
});

const Comment = mongoose.model('Comment', commentSchema);
const Photo = mongoose.model('Photo', photoSchema);


export default Photo;