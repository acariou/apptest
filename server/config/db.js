var mongoose = require('mongoose');

var dbConnect = {
    config: {
        dsn: "mongodb://localhost/abfact"
    },
    connect: function () {
        var dsn = this.config.dsn;

        mongoose.connect(dsn, function (err) {
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
    }
};

module.exports = dbConnect;