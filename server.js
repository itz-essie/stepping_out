var path = require('path');
var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

// Requiring our models for syncing
const db = require('./models');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/index");
app.use(routes)

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});