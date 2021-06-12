const mongoose = require('mongoose');

var Author = mongoose.model('Author',{
     name:{type: String},
     majorworks : {type: String},
     description : {type:String}},'author');


     module.exports ={ Author }; 