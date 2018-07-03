const express = require('express') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// Sign Up
router.post('/auth/register',
    // 1. Register a user with username/password
    authMiddleware.register,
    // 2. Create and return a new JWT
    authMiddleware.signJWTForUser
)

// Sign In
router.post('/auth', 
    // 1. Authorise via username/password
    authMiddleware.signIn,
    // 2. Create and return a new JWT
    authMiddleware.signJWTForUser
)

module.exports = router