require('dotenv/config');

module.exports = {
    server : {
        port: process.env.APP_PORT
    },
    database : {
        host: process.env.DATABASE_HOST, 
        port: process.env.DATABASE_PORT, 
        dialect: process.env.DATABASE_DIALECT, 
        database: process.env.DATABASE_NAME, 
        password: process.env.DATABASE_PASSWORD,
        user: process.env.DATABASE_USER,
    }
}