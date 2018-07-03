const request = require('supertest')
const app = require('../app')

describe('movies', () => {
    it('should work', () => {
        expect(true).toBe(true)
    })

    describe('index', () => {
        it('should respond with 401', () => {
            return request(app).get('/movies').expect(401)
        })

        it('should respond with 200 when loggin in', () => {
            const credentials = {
                email: 'john.brown@example.com', password: 'password1'
            } 
            request(app).post('/auth')
                .send(credentials)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                // .expect('Content-Type', /json/)
                .expect(200)
                .then(resp => console.dir(resp))
                
                // .then(resp => console.log(resp))
        })
    })
})