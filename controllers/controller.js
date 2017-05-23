'use strict';

var mongoose = require('mongoose');

Item = mongoose.model("Items");



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
  newItem.save(function(err,item){
    if(err){
      res.send(err)
    }
    res.json(item);

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
  Item.findOneAndUpdate(req.params.itemId, req.body, {new:true}, function(err,task){
    if(err){
      res.send(err)
    }
    res.json(item);
  });

};

exports.deleteItem = function(req,res){
  Item.remove({
    _id: req.params.itemId
  }, function(err,task){
    if(err){
      res.send(err)
    }
    res.json({ message: 'Task successfully deleted' });

  });
}
