const db = require('../models/db');
exports.team = function (req,res) {
db.query('select * from team', function (err,data) {
if(err) return console.log(err);
res.send(data);
console.log(data);
})
}