'use strict';
var mongoose = require("mongoose");

var dbSchema = mongoose.Schema;

var itemSchema = new dbSchema ({
  name: {
    type: String
  },
  link:{
    type: String
  }

  ,
  priceusd:{
    type:String
  },
  image:{
    data: Buffer,
    contentType:String
  }

});

var Item = mongoose.model('Items', itemSchema);
// var i = new Item;
// i.name = "Balenciaga Red Arena Leather High Top Sneakers"
// i.links =   "http://www.neimanmarcus.com/Balenciaga-Men-s-Arena-Leather-High-Top-Sneaker/prod188650279/p.prod";
// i.priceusd = 585;
// i.image = "https://s-media-cache-ak0.pinimg.com/736x/50/8f/62/508f6263f9b6987e9f525f30193560eb.jpg";
// i.save();
//
//
// var margielas = new Item;
// margielas.name = "Maison Margiela 22 Replica Low Sneaker"
// margielas.links =   "https://www.endclothing.com/us/maison-margiela-22-replica-low-sneaker-s37ws0306-sy0102-529.html";
//
// margielas.image = "https://media.endclothing.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/2/0/20-12-2016_maisonmargiela_22replicalowsneaker_reefblue_s37ws0306-sy0102-529_th_1.jpg";
// margielas.priceusd = 329;
// margielas.save();
//
//
//
// var cdgShirt = new Item;
//
// cdgShirt.name = "Comme Des Garcons Play Inverted Text Logo Tee";
// cdgShirt.links =  "https://www.endclothing.com/us/comme-des-garcons-play-inverted-text-logo-tee-p1t068-1.html";
// cdgShirt.image = "https://media.endclothing.com/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/0/1/01-09-2016_commedesgarcons_playinvertedtextlogotee_white_black_sh_1.jpg"
// cdgShirt.priceusd = 85;
// cdgShirt.save();
