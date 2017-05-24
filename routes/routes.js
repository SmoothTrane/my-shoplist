'use strict';
var express = require("express");
var path = require('path');
module.exports = function(app){
  var itemController = require("../controllers/ItemController");
  var homeController = require("../controllers/HomeController");



  app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });
  app.use(function(req, res) {
    res.status(404).send("ERROR 404 NOT FOUND")
  });

  app.route("/items")
    .get(itemController.getAllItems)
    .post(itemController.addItem);

    app.route("/items/:itemId")
      .get(itemController.getItemById)
      .put(itemController.editItem)
      .delete(itemController.deleteItem);

};
