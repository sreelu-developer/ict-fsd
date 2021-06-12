const mongoose = require('mongoose');

const Schema= mongoose.Schema;
var NewProductSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookCode : String,
    authorName : String,
    description : String,
    price : String,
    starRating : Number,
    imageUrl : String

});

 var Bookdata = mongoose.model('book',NewProductSchema,'books');
 module.exports = Bookdata;
