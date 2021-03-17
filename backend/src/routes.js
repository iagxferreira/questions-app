const router = require('express').Router()

router.get('/', (request, response) => response.json({ method: 'GET!' }))
router.post('/', (request, response) => response.json({ method: 'POST!' }))
router.put('/', (request, response) => response.json({ method: 'PUT!' }))
router.delete('/', (request, response) => response.json({ method: 'DELETE!' }))

module.exports = router;