const db = require('../models/db');
const localStorage = require('localStorage');
exports.getMenu = function (req,res) {
    db.query("select * from menu", function (err,data) {
        if(err) return console.log(err);
        res.send(data);
// console.log(data);

    })
}

exports.getHomeData = function (req,res) {
db.query("select * from homepages", function (err,data) {
if(err) return console.log(err);
res.send(data);
    })
}
exports.footerData = function (req,res) {
db.query('select * from footer', function (err,data) {
if(err) return console.log(err);
res.send(data);
})
}

exports.logout = function (req,res) {
localStorage.removeItem('token');
res.send('removed');
}