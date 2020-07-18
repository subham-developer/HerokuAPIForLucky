const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Create a connection to the database
// const connection = mysql.createConnection({
//     host: dbConfig.host,
//     user: dbConfig.username,
//     password: dbConfig.password,
//     database: dbConfig.database
// });

const connection = mysql.createPool({
    connectionLimit: 100, //important
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    debug: false
});

// open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });

module.exports = connection;
