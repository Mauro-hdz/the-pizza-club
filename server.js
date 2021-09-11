const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
// const bodyParser = require("body-parser");


// app.use(routes);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/pizza_controller.js") 
app.use(routes);


app.listen(console.log(`Server listening on port: ${PORT}`));
