'use strict';
var express = require("express");
var path = require('path');
var multer = require('multer');


var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, './uploads/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});

var upload= multer({
 storage: storage
});

module.exports = function(app){
  var itemController = require("../controllers/ItemController");
  var homeController = require("../controllers/HomeController");



    app.route("/items")
      .get(itemController.getAllItems);

      app.route("/items/:itemId")
        .get(itemController.getItemById)
        .put(itemController.editItem)
        .delete(itemController.deleteItem);


  app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });

  app.post('/items', upload.any(), function(req, res, next) {
      console.log('files:', req.files)
      console.log("body:", res.body);
      // req.file.filename =


      // more code
  });

  app.use(function(req, res) {
    res.status(404).send("ERROR 404 NOT FOUND")
  });




};
