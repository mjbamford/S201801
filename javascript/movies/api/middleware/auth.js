const JWT = require('jsonwebtoken')

function signJWTForUser (req, resp, next) {
    const token = JWT.sign(
        // Payload
        { 
            userId: 666
        },
        // Secret
        "thisisnotasecret",
        // Options
        {
            algorithm: 'HS256',
            expiresIn: '7 days',
            subject: '666'
        }
    )

    resp.json({ token })
}

module.exports = {
    signJWTForUser 
}