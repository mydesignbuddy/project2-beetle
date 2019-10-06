var db = require("../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new items
  app.post("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Delete an item by id
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
