var jwt = require('jwt-simple');
var mongoose = require('mongoose');

//console.log(mongoose);

var auth = {

    login: function (req, res) {

        var username = req.body.username || '';
        var password = req.body.password || '';

        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        // Fire a query to your DB and check if the credentials are valid
        var dbUserObj = auth.validate(username, password);

        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        if (dbUserObj) {
            // If authentication is success, we will generate a token
            // and dispatch it to the client

            res.json(genToken(dbUserObj));
        }

    },

    validate: function (username, password) {

        var db = mongoose.connect('mongodb://localhost/abfact', function (err) {
            if (err) throw err;
        });

        var userSchema = mongoose.Schema({
            username: String,
            password: String,
            role: String
        });
        var User = mongoose.model('user', userSchema);
        var dbUserObj = {};

        User.find({username: username, password: password}, function (err, Users) {
            if (err) return console.error(err);
            console.log("Users : ", Users);
            dbUserObj = Users;
        });

        return dbUserObj;
    },

    validateUser: function (username) {
        // spoofing the DB response for simplicity
        /*var dbUserObj = { // spoofing a userobject from the DB.
         name: 'arvind',
         role: 'admin',
         username: 'arvind@myapp.com'
         };*/

        var db = mongoose.connect('mongodb://localhost/abfact', function (err) {
            if (err) throw err;
        });

        var userSchema = mongoose.Schema({
            username: String,
            password: String,
            role: String
        });
        var User = mongoose.model('user', userSchema);
        var dbUserObj = {};

        User.find({username: username, password: password}, function (err, Users) {
            if (err) return console.error(err);
            console.log("Users : ", Users);
            dbUserObj = Users;
        });

        return dbUserObj;
    }
}

// private method
function genToken(user) {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    }, require('../config/secret')());

    return {
        token: token,
        expires: expires,
        user: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
