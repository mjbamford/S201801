const request = require('supertest')
const app = require('./app')

describe('Ping', () => {
    it('should pong', (done) => {
        request(app).get('/ping').then(resp => {
            expect(resp.statusCode).toBe(200)
            done()
        })
    })

    it('should pong', () => {
        return request(app).get('/ping').then(resp => {
            expect(resp.statusCode).toBe(200)
        })
    })

    it('should pong', () => {
        return request(app).get('/ping').expect(200)
    })
})