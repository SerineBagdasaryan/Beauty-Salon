const db = require('../models/db');
exports.price = function (req,res) {
    db.query(`select * from prices` , function (err,data) {
if(err) return console.log(err);
res.send(data);
    })

}



















