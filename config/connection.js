var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "pizza_db"
});

// Establishing the connection
connection.connect(function(err){
    if (err) {
        console.log("error: " + err.stack);
        return;
    };
    console.log("Connected as id: "+ connection.threadId);
});

// Exporting connection
module.exports = connection;
