const db = require('../models/db');
exports.contact = function (req,res) {
db.query(`select * from contact`, function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}