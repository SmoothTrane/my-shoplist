'use strict';

var mongoose = require('mongoose'),
Item = mongoose.model("ShoppingItems");
var path = require('path');
exports.getAllItems = function (req,res){
  Item.find({},function(err,item) {
    if(err){
      res.send(err)
    }
    res.json(item);

  });
};

exports.addItem = function(req,res){
  var newItem = new Item(req.body);
  newItem["imagePath"] = req.file.path;
  newItem["imageName"] = req.file.filename;
  newItem.save(function(err,item){
    if(err){
      res.send(err)
    }
    res.redirect('back');

  });

};


exports.getItemById = function(req,res){
  Item.findById(req.params.itemId, function(err,item){
    if(err){
      res.send(err)
    }
    res.json(item);
  });
};

exports.editItem = function(req,res){
  Item.findByIdAndUpdate(req.params.itemId, req.body, {new:true}, function(err,item){
    if(err){
      res.send(err)
    }
    res.redirect('back');
  });

};

exports.deleteItem = function(req,res){
  Item.remove({
    _id: req.params.itemId
  }, function(err,task){
    if(err){
      res.send(err)
    }
    res.json({ message: 'Item successfully deleted' });

  });
}
