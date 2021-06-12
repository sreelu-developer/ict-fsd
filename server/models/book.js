const mongoose = require('mongoose');

var Book = mongoose.model('Book',{
     name:{type: String},
     code : {type: String},
     colour : {type:String},
     count : {type:Number}
     },'book');
     module.exports ={ Book }; 