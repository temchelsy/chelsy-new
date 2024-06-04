var express = require("express");
var router = express.Router();
var bicycleModal = require("../modal");
const modal = require("./modal");

router.get("/:id", function (req, res, next) {
  modal.bicycle.read(req.params.id, (err, result) => {
    if (err) {
      if (err.message === "not found") next();
      else next(err)
    } else {
        res.send(result)
    }
  });
});

module.exports = router
