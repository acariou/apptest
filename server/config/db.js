var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/abfact', function (err) {
    if (err) throw err;
});

var usersSchema = mongoose.Schema({
    id : Number,
    nom: String,
    prenom: String,
    username: String,
    password: String
});

var Users =mongoose.model('users', usersSchema);

var db = mongoose.connection;

