module.exports = {
    development: {
        mongodbUrl: 'mongodb://localhost:27017/movies'
    },
    production: {
        mongodbUrl: process.env.MONGOGB_URL
    }
}