const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String
    },
    postcode: {
        type: String
    },
    bio:{
        type: String
    },
    dishes: {
        type: [String],
        required: true
    },
    social: {
        insta_handle: {
            type: String
        }
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);