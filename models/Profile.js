const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        required: true,
        default: ""
    },
    skills: {
        type: [String],
        required: true,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    githubUserName: {
        type: String,
        default: ""
    },
    experience: [
        {
            title: {
                type: String,
                required: true,
                default: ""
            },
            company: {
                type: String,
                required: true,
                default: ""
            },
            location: {
                type: Date,
                required: true,
                default: ""
            },
            to: {
                type: Date,
                default: ""
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String,
                default: ""
            }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true,
                default: ""
            },
            degree: {
                type: String,
                required: true,
                default: ""
            },
            fieldOfStudy: {
                type: String,
                required: true,
                default: ""
            },
            from: {
                type: Date,
                required: true,
                default: ""
            },
            to: {
                type: Date,
                default: ""
            },
            current: {
                type: Boolean,
                default: false,
                default: ""
            },
            description: {
                type: String,
                default: ""
            }
        }
    ],
    social: {
        youtube: {
            type: String,
            default: ""
        },
        twitter: {
            type: String,
            default: ""
        },
        facebook: {
            type: String,
            default: ""
        },
        linkedin: {
            type: String,
            default: ""
        },
        instagram: {
            type: String,
            default: ""
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);