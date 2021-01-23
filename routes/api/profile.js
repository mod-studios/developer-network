const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const RestaurantProfile = require('../../models/RestaurantProfile');

// @route   GET api/profile/restaurant
// @desc    Get a restaurant's profile
// @access  Public
router.get('/restaurant', async (req, res) => {
    try {
        res.send('yoo');
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;