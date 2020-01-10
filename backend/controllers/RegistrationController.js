const db = require('../models/db');
exports.registration = function (req,res) {
db.query('select * from register', function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}