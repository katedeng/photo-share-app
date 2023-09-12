import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    login_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: {
        type: [String],
        required: true,
    },

}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

export default User;