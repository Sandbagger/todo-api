const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res)=>{
    db.Todo.find()
    .then((todos)=>{
        res.json(todos)
    }).catch((err)=>{
        res.send(err);
    })
})

router.post('/',(req, res)=>{
    db.Todo.create(req.body)
    .then((todo)=>{
        res.status(201).json(todo)
    } )
    .catch((err)=>{
        res.send(err);
    })
});

router.delete('/:id', (req, res)=>{
    db.Todo.remove({_id: req.params.id})
        .then(()=>{
            res.json({message: "Todo has been deleted"})
        })
        .catch((err)=>{
            res.send(err)
        })
});


module.exports = router;