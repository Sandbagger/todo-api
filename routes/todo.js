var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    }).catch(function(err){
        res.send(err);
    })
})

router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then((todo)=>{
        res.status(201).json(todo)
    } )
    .catch(function(err){
        res.send(err);
    })
});

router.delete('/:id', function(req, res){
    db.Todo.remove({_id: req.params.id})
        .then(function(){
            res.json({message: "Todo has been deleted"})
        })
        .catch(function(err){
            res.send(err)
        })
});

module.exports = router;