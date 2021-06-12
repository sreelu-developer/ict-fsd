const mongoose = require('mongoose');

const Schema= mongoose.Schema;
var NewAuthorSchema = new Schema({
    authorName : String,
    majorworks : String,
    description : String,
    imageUrl : String
});

 var Authordata = mongoose.model('author',NewAuthorSchema,'authors');
 module.exports = Authordata;
