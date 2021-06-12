const express =require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var{ Book } = require('../models/book');


router.get('/', (req, res) => {
    Book.find((err,docs) => {
        if (!err) { res.send(docs);}
        else {console.log('Error in retriving data:'+ JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records: ${req.params.id}`);

  Book.findById(req.params.id, (err,doc) =>{
    if (!err) { res.send(doc);}
    else {console.log('Error in retriving data:'+ JSON.stringify(err, undefined, 2)); }
  });


});
router.post('/', (req, res) => {
    var books = new Book({
        name: req.body.name,
        code: req.body.code,
        author: req.body.author,
        count: req.body.count,
    });

   books.save((err, doc) => {
       if (!err) { res.send(doc);}
       else {console.log('Error in book save:' + JSON.stringify(err, undefined, 2));}
   });


});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records this id: ${req.params.id}`);
    var Book ={
        name: req.body.name,
        code: req.body.code,
        author: req.body.author,
        count: req.body.count,
    };
    Book.findByIdAndUpdate(req.params.id, {$set: emp }, { new : true},(err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in book update:' + JSON.stringify(err, undefined, 2));}
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records this id: ${req.params.id}`);

    Book.findByIdAndRemove(req.params.id, {$set: emp }, { new : true},(err, doc) => {
      if (!err) { res.send(doc);}
        else {console.log('Error in book delete:' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports= router;