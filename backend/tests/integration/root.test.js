const request = require('../index')

describe('testing root route resources.', ()=>{
    test('if GET / returns 200 status code.', async ()=>{
        const { status } = await request.get('/');
        expect(status).toBe(200);
    })
})