const express =require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var{ Author } = require('../models/author');

router.get('/', (req, res) => {
    Author.find((err,docs) => {
        if (!err) { res.send(docs);}
        else {console.log('Error in retriving data:'+ JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records: ${req.params.id}`);

    Author.findById(req.params.id, (err,doc) =>{
    if (!err) { res.send(doc);}
    else {console.log('Error in retriving data:'+ JSON.stringify(err, undefined, 2)); }
  });


});

router.post('/', (req, res) => {
    var authors = new Author({
        authorName : req.body.author.authorName,
        majorworks : req.body.author.description,
        description : req.body.author.majorworks,
        imageUrl : req.body.author.imageUrl
    });

   authors.save((err, doc) => {
       if (!err) { res.send(doc);}
       else {console.log('Error in author save:' + JSON.stringify(err, undefined, 2));}
   });


});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records this id: ${req.params.id}`);
    var Author ={
        authorName : req.body.author.authorName,
        majorworks : req.body.author.description,
        description : req.body.author.majorworks,
        imageUrl : req.body.author.imageUrl
    };
    Author.findByIdAndUpdate(req.params.id, {$set: emp }, { new : true},(err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in author update:' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records this id: ${req.params.id}`);

    Author.findByIdAndRemove(req.params.id, {$set: emp }, { new : true},(err, doc) => {
      if (!err) { res.send(doc);}
        else {console.log('Error in Author delete:' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports= router;
