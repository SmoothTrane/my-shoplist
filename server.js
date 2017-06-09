var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Item = require("./models/models"),
  bodyParser = require("body-parser"),
  db = require("./db");
var localDB = 'mongodb://localhost/ShopListDb'
console.log(db);
  mongoose.connect(db);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));


var routes = require('./routes/routes');
routes(app);



app.listen(port);

console.log("Shoplist initialized.... port: " + port);
