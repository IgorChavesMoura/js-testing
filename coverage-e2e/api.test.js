const { describe, it } = require('mocha');

const request = require('supertest');

const assert = require('assert');

const app = require('./api');

describe('API Suite test', () => {

    describe('/contact', () => {

        it("Should request the contact page and return HTTP Status 200", async () => {

            const response = await request(app)
                                    .get('/contact')
                                    .expect(200);
                                    
            assert.deepStrictEqual(response.text, 'Contact us page');

        });

    });

    describe('/hello', () => {

        it("Should request an inexistent route /hi and redirect to /hello", async () => {

            const response = await request(app)
                                    .get('/hi')
                                    .expect(200);
                                    
            assert.deepStrictEqual(response.text, 'Hello World!');

        });

    });

    describe('/login', () => {

        it("Should unauthorize when using wrong credentials and return HTTP Status 200", async () => {

            const response = await request(app)
                                    .post('/login')
                                    .send({ username:'IgorChavesMoura', password:'123' })
                                    .expect(200);
                                    
            assert.deepStrictEqual(response.text, 'Login has succeeded!');

        });

        it("Should fail on the login route and return HTTP Status 401", async () => {

            const response = await request(app)
                                    .post('/login')
                                    .send({ username:'XuxaDaSilva', password:'123456' })
                                    .expect(401);
                                    
            assert.deepStrictEqual(response.text, 'Login failed!');
            assert.ok(response.unauthorized);


        });

    });

});