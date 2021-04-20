const request = require('../index')
const knex = require('../../src/config/knex')

describe('testing knex config',()=>{
    test('', async ()=>{
        const response = await knex.select().from('vote').timeout(1000)
        expect(response).not.toBe(null);
    })
})