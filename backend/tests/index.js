const axios = require('axios');
require('dotenv/config');

const port = process.env.APP_PORT;
const api = axios.create({
    baseURL: `http://localhost:${port}/`
})

module.exports = api;