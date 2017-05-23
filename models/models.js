'use strict';
var mongoose = require("mongoose");

var dbSchema = mongoose.Schema;

var itemSchema = new dbSchema ({
  name: {
    type: String
  },
  links:
  []
  ,
  priceusd:{
    type:Number
  },
  image:{
    type:String
  }

});

var Item= mongoose.model('Items', itemSchema);
var i = new Item;
i.name = "Balenciagas"
i.links = ["www.facebook.com"];
i.priceusd = 130;
i.save();
