const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createPool({
    host:       process.env.HOST_APP,
    user:       process.env.USER_APP,
    password:   process.env.PW_APP,
    database:   process.env.DB_APP
})

module.exports = connection;