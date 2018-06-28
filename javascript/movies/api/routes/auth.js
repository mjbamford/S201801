const express = require('express') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.post('/auth/register',
    // 1. Register a user
    // 2. Create and return a new JWT
    authMiddleware.signJWTForUser
)

module.exports = router