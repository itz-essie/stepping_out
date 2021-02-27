var express = require("express");
const fs = require('fs');
var path = require('path');
const formidable = require('formidable');


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

app.post('/api/upload', (req, res, next) => { 
    
  const form = new formidable.IncomingForm(); 
  form.parse(req, function(err, fields, files){ 

      var oldPath = files.profilePic.path; 
      var newPath = path.join(__dirname, 'uploads') 
              + '/'+files.profilePic.name 
      var rawData = fs.readFileSync(oldPath) 
    
      fs.writeFile(newPath, rawData, function(err){ 
          if(err) console.log(err) 
          return res.send("Successfully uploaded") 
      }) 
}) 
res.sendFile(__dirname + '/entertainment')
}); 


// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});