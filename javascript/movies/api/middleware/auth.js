const JWT = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const User = require('../models/user')

const secret = "thisisnotasecret"
const algorithm = 'HS256'

passport.use(User.createStrategy());

passport.use(new passportJWT.Strategy({
        secretOrKey: secret,
        algorithms: [ algorithm ],
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    function(payload, done) {
        const id = payload.sub
        User.findById(id)
        .then(user => {
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        })
        .catch(error => {
            done(error)
        })
    })
)

function register (req, resp, next) {
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    User.register(user, req.body.password, (err) => {
        if (err) {
            next(err)
        }
        req.user = user
        next()
    })
}

function signJWTForUser (req, resp, next) {
    const token = JWT.sign(
        // Payload
        { 
            email: req.user.email
        },
        // Secret
        secret,
        // Options
        {
            algorithm: algorithm,
            expiresIn: '7 days',
            subject: req.user._id.toString()
        }
    )

    resp.json({ token })
}

// A hobby middleware to illustrate Authorization header check.
function require666 (req, resp, next) {
    // Need "Bearer 666" to be authorised
    if (req.get("Authorization") === "Bearer 666") {
        next()
    } else {
        resp.status(401).json({ "status": "unauthorized" })
    }
}

module.exports = {
    register,
    signJWTForUser,
    signIn: passport.authenticate('local', { session: false }),
    requireJWT: passport.authenticate('jwt', { session: false }),
    require666
}