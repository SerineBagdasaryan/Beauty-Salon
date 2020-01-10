const db = require('../models/db');
exports.login = function (req,res) {
db.query('select * from login', function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}