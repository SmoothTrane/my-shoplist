'use strict';

module.exports = function(app){
  var itemController = require("../controllers/controller");

  app.route("/items")
    .get(itemController.getAllItems)
    .post(itemController.addItem);

    app.route("/items/:itemId")
      .get(itemController.getItemById)
      .put(itemController.editItem)
      .delete(itemController.deleteItem)

      app.use(function(req, res) {
  res.status(404).send("ERROR 404 NOT FOUND")
});

};
