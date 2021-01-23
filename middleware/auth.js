const jwt = require('jsonwebtoken');
const config = require('config');

// @middleware
// @desc    Gets token from request's header
// @access  Public
module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');
    
    // Check if not token 
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied.' })
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // Defining the user id which will then be used by routes
        req.user = decoded.user;

        next();

    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};