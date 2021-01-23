const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
const { profile } = require('console');

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name, avatar']);

        if (!profile) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }

        res.json(profile);

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/profile
// @desc    Create or update a user profile
// @access  Private
router.post(
    '/', 
    [
        auth, 
        [
            check('status', 'Status is required')
                .not()
                .isEmpty(),
            check('skills', 'Skills is required')
                .not()
                .isEmpty()
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        
        const {
            company,
            website,
            location,
            bio,
            status,
            githubUsername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body;

        // Build profile object

        const profileFields = {};
        profileFields.user = req.user.id;

        if (company) profileFields.company = company;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (bio) profileFields.bio = bio;
        if (status) profileFields.status = status;
        if (githubUsername) profileFields.githubUsername = githubUsername;
        if (skills) {
            profileFields.skills = skills.split(',').map(skill => skill.trim());
        }

        // Build social object
        profileFields.social = {};
        if (youtube) profileFields.social.youtube = youtube;
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;

        try {

            // Checking if the user has a profile already
            let profile = await Profile.findOne({ user: profileFields.user });
            if (profile) {
                // Update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id }, 
                    { $set: profileFields }, 
                    { new: true }
                );

                return res.json(profile);
            }

            // Creating the profile
            profile = new Profile(profileFields);

            await profile.save();
            res.status(200).json(profile);
            

        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server Error')
        }
    }
)

// @route   GET api/profile/user/:user_id
// @desc    Gets profile by userID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.params.user_id});

        if (!profile) return res.status(400).json('No users with that ID');

        res.json(profile);

    } catch (error) {
        if (error.kind == 'ObjectId') {
            return res.status(400).json('No users with that ID');
        }
    }
})


// @route   GET api/profile
// @desc    Gets all profiles
// @access  Public
router.get('/', async (req, res) => {

    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

})

module.exports = router;
