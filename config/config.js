require('dotenv').config();

const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT,
    host: process.env.HOST
}

module.exports = config;