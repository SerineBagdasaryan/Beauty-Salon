const db = require('../models/db');
exports.price = function (req,res) {
    db.query(`select * from price` , function (err,data) {
if(err) return console.log(err);
res.send(data);
    })

}
exports.prices = function (req,res) {
    db.query(`select * from price1` , function (err,data) {
if(err) return console.log(err);
res.send(data);
    })

}
exports.pricesData = function (req,res) {
    db.query(`select * from price3` , function (err,data) {
if(err) return console.log(err);
res.send(data);
    })

}