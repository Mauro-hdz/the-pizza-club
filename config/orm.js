const connection = require("../config/connection");

// Create the functions that will execute the MySQL commands in the controllers folder. Will be used to retrieve, store, and/or delete data from the database.
//connection.query takes 3 arguments, the query string, an array of of arguments to insert in the string, and a function
const orm = {
    selectOne: () =>  {
        const queryString = "";
        connection.query(queryString,
            [],
            () => {});
    },
    
    insertOne: () => {
        const queryString = "";
        connection.query(queryString,
            [],
            () => {});
    },
    
    updateOne: () =>  {
        const queryString = "";
        connection.query(queryString,
            [],
            () => {});
    }
};



module.exports = orm