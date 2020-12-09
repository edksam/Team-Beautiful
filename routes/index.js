const express = require("express");
const router = express.Router();
const Graduate = require("../models/graduate");

router.get("/graduates", function(req, res) {
  Graduate.find(function(err, graduates) {
    res.json(graduates);
  })

});
router.get("/graduates/:id", function(req, res) {
  Graduate.findById(req.params.id, function(err, graduate) {
    if (!graduate) {
      res.status(404).send("No result found")
    } else {
      res.json(graduate);
    }
  })

});

router.post('/graduates', function(req, res) {
  let graduate = new Graduate(req.body);
  graduate.save()
    .then(graduate => {
      res.send(graduate);
    })
    .catch(function(err) {
      res.status(422).send('Graduate add failed');
    });
});

router.patch('/graduates/:id', function(req, res){
  Graduate.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('Graduate updated');
    })
    .catch(function(err) {
      res.status(422).send("Graduate update failed.");
    });
    
});

router.delete('/graduates/:id', function(req, res) {
  Graduate.findById(req.params.id, function(err, graduate) {
    if (!graduate) {
      res.status(404).send('Graduate not found');
    } else {
      Graduate.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json("Graduate deleted") })
        .catch(function(err) {
          res.status(400).send("Graduate delete failed.");
        })
    }
  });
})

module.exports = router;
