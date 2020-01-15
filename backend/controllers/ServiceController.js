const db =require('../models/db');
exports.serviceData = function (req,res) {
db.query(`select * from service`, function (err, data) {
if(err) return console.log(err);
res.send(data);
})
}

exports.imageService = function (req,res) {
db.query("select * from serviceWithImages", function (err,data) {
if(err) return console.log(err);
res.send(data);
console.log(data);
})
}
exports.service = function (req,res) {
db.query("select * from service2", function (err,data) {
if(err) return console.log(err);
res.send(data);
    console.log(data);
})
}
exports.serviceEnd = function (req,res) {
db.query("select * from service3", function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}