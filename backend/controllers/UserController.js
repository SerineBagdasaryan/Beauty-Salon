const db = require('../models/db');
const passwordHash = require('password-hash');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const request = require('request');
require('request-to-curl');
const emailExistence = require('email-existence');
const verifier = require('email-verify');
const infoCodes = verifier.infoCodes;
require('../passport-config');
require('../passport-google');
require('../passport-facebook');
const nodemailer = require('nodemailer');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const secret = 'secret';
 let userId;
var code;
 function getUserId(req, res,) {
    let token = req.headers['authorization'];
    // console.log(token);
if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
}
if (token) {
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // console.log(err);
        } else {
            req.decoded = decoded;
           userId= decoded.id;

        }
    });
    return userId;
}
}


exports.postUser= function(req, res) {
    verifier.verify(req.body.email, function (err, info) {
        if (err) console.log(err);
        else {
            console.log("Success (T/F): " + info.success);
            console.log("Info: " + info.info);

            //Info object returns a code which representing a state of validation:

            //Connected to SMTP backend and finished email verification
            // console.log(info.code === infoCodes.finishedVerification);

            // //Domain not found
            // console.log(info.code === infoCodes.domainNotFound);
            //
            // //Email is not valid
            // console.log(info.code === infoCodes.invalidEmailStructure);
            //
            // //No MX record in domain name
            // console.log(info.code === infoCodes.noMxRecords);
            //
            // //SMTP connection timeout
            // console.log(info.code === infoCodes.SMTPConnectionTimeout);
            //
            // //SMTP connection error
            // console.log(info.code === infoCodes.SMTPConnectionError)
        }
    });

    emailExistence.check(req.body.email, function (err, res) {
        console.log('res: ' + res);
    });

    const errorObj = {};
    success = true;
    if (req.body.name == "") {
        success = false;
        errorObj.nameErr = "Please enter your  name"

    }
    if (req.body.lastname == "") {
        success = false;
        errorObj.lastnameErr = "Please enter your  lastname"

    }
    if (req.body.phone == "") {
        errorObj.phoneErr = "Please enter your  phone number"
        success = false;
    }
    if (req.body.email == "") {
        errorObj.emailErr = "Please enter your  email"
        success = false;
    }
    if (req.body.password == "") {
        errorObj.passwordErr = "Please enter your  password"
        success = false;
    }
    if (req.body.confirmPassword == "") {
        errorObj.confirmPasswordErr = "Please enter your  confirmPassword"
        success = false;
    }

    if (req.body.password !== req.body.confirmPassword) {
        success = false;
        errorObj.msg = "Password is not same as confirmation";
        // return res.json(errors);
    }
    if (success == false) {
        res.json(errorObj);
    } else {
        // console.log(req.body);
        const name = req.body.name;
        const lastname = req.body.lastname;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = passwordHash.generate(req.body.password);
        const confirmPassword = passwordHash.generate(req.body.confirmPassword);
        const role = 2;
        // console.log(req.body);
        db.query("SELECT * FROM users WHERE email=?", [email], function (err, user) {
            if (err) throw err;
            if (user && user.length === 0) {
                // if (!req.body) return res.sendStatus(400);
                db.query("INSERT INTO users (name,lastname,phone,email,password,confirmPassword,role) VALUES (?,?,?,?,?,?,?)", [name, lastname, phone, email, password, confirmPassword, role], function (err, data) {
                    if (err) return console.log(err);
                    res.json({data: data, message: "User registered"});
                })

            } else {
                res.json({emailDuplicate: 'Email already exist'})
            }


        });
    }
}

exports.login = function (req,res,next) {
    console.log(req.body);
passport.authenticate('local', function (err,user,info) {
    if(err) { return res.status(501).json(err); }
    if(!user) {return res.status(501).json(info)}
    req.login(user,function (err) {
        if(err) {res.status(501).json(err);}
        let token;
        if(req.body.checkbox === false) {
            token = jwt.sign({
                    id: user.id,
                },
                secret, {
                    expiresIn: 20// expires in 24 hours
                });
        }else {
            token = jwt.sign({
                    id: user.id,
                },
                secret, {
                    expiresIn: 1000000000// expires in 24 hours
                });
        }
        // console.log(user.id);
        let id = user.id;
        db.query("select * from users where id=?", [id], function (err,data) {
            if(err) return console.log(err);
           // console.log(data[0].role);
           const obj ={};
           if(data[0].role === 2){
               obj.user = 'user';
           }else {
            obj.user= 'admin';
           }
           console.log(obj);
            res.status(200).send({
                token: token,
                message: obj,
            });
        })

// return res.status(200).send(req.user);
    });
})(req,res,next)
};

exports.loginGoogle = function(req, res) {
    console.log('google data');
    let name =  req.body.firstName;
    let lastname = req.body.lastName;
    const role = 4;
    let email = req.body.email;
    let google_id = req.body.id;
    let image = req.body.photoUrl;
    let google_token = req.body.authToken;
    const googleData = [name,lastname,email,role,google_id,image,google_token];
    console.log(name,lastname,image);
    db.query("SELECT * FROM users WHERE google_id=?", [google_id], function(err, user) {
        if(err) throw err;
        if(user && user.length === 0) {
            console.log("There is no such user, adding now google");
            db.query("INSERT INTO users (name,lastname,email,role,google_id,image,google_token) VALUES (?,?,?,?,?,?,?)",googleData , function (err, data) {
                if (err) return console.log(err);
                console.log(data.insertId);
                const token = jwt.sign({
                        id: data.insertId,
                    },
                    secret, {
                        expiresIn: 1000000000
                    });
                res.status(200).send({
                    token: token,
                });
            })} else {
            const token = jwt.sign({
                    id: user[0].id,
                },
                secret, {
                    expiresIn: 1000000000
                });
            res.status(200).send({
                token: token,
            });

            console.log("User already exists in database");
            // res.json({token: token});
        }
    })
}
 exports.loginFb = function(req, res) {
     let name =  req.body.firstName;
     let lastname = req.body.lastName;
     const role = 3;
     let facebook_id = req.body.id;
     let image = req.body.photoUrl;
     let facebook_token = req.body.authToken;
     const facebookLoginData =[name,lastname, role,facebook_id,image,facebook_token];
     if(facebookLoginData.length > 0) {
         console.log(name, lastname, image, facebook_id, facebook_token);
         console.log(name, lastname, image, facebook_id, facebook_token);
         db.query("SELECT * FROM users WHERE facebook_id=?", [facebook_id], function (err, data) {
             if (err) throw err;
             if (data && data.length === 0) {
                 console.log("There is no such user, adding now");
                 console.log(data, 'inserted');
                 db.query("INSERT INTO users (name,lastname,role,facebook_id,image,facebook_token) VALUES (?,?,?,?,?,?)", facebookLoginData, function (err, data) {
                     if (err) return console.log(err);
                     const token = jwt.sign({
                             id: data.insertId,
                         },
                         secret, {
                             expiresIn: 1000000000
                         });
                     res.status(200).send({
                         token: token,
                     });
                     // console.log(data,"inserted")
                 })
             } else {
                 const token = jwt.sign({
                         id: data[0].id,
                     },
                     secret, {
                         expiresIn: 1000000000
                     });
                 res.status(200).send({
                     token: token,
                 });

                 console.log("User already exists in database");
                 // res.json({token: token});
             }
         })
     }
 }


exports.getUserById = function (req,res) {
    let id = getUserId(req, res);
    console.log(id,'token');
    db.query("SELECT * FROM users WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.send(data);
    });
}

exports.users = function (req,res) {
db.query("select * from users", function (err,data) {
if(err) return console.log(err);
res.send(data);

})
}

exports.forgotPassword = function(req,res){
    let today = new Date();
    let time = (today.getHours()).toString() + today.getMinutes().toString()  + today.getSeconds().toString()+ today.getMilliseconds().toString();
  code = time;
    console.log(typeof code);
    const errorObj = {};
    success = true;
    if(req.body.password == ""){
        success = false;
        errorObj.passErr="Please enter your  password"
return res.json(errorObj);
    }

     const email = req.body.email;
     db.query(`select * from users where email=?`, [email], function (err,user) {
         if(err)  console.log(err);
         if(!user[0]){
              res.json({success: false, msg: 'Incorrect Email'});
         }else{
             const transporter = nodemailer.createTransport({
                 service: 'gmail',
                 auth: {
                     user:'serinebagdasaryan5@gmail.com',
                     pass: '093302669s'
                 }
             });
  let result = transporter.sendMail({
      from: '"Node js" <serinebagdasaryan5@gmail.com>',
      to: email,
      subject: "Message from Beauty Salon",
      html: code
  });
             // console.log(result,'res');
             res.json({email: user[0].email,code:code,success: true});
         }
         //


     })
}
 exports.newPassword = function(req,res) {
    console.log(req.body,'body');
    // console.log(typeof code,'global');
    // console.log(typeof req.body.code);
     const codes = req.body.code;
     const email = req.body.email;
     // console.log(req.body);
     const obj = {};
     success= true;
    if(req.body.password !== req.body.confpassword){
        success = false;
        obj.msgEqual="Password is not same as confirmation";
    }
    if(codes !== code){
        success = false;
        obj.msgCode="Incorrect code";
    }
     if (success == false)  {
         res.send(obj);
     }else {
         const password = passwordHash.generate(req.body.password);
         console.log(password,'gen');
         const confirmPassword = passwordHash.generate(req.body.confpassword);
         console.log(confirmPassword,'cgen');
         db.query("UPDATE users SET  password=?, confirmPassword=? WHERE email=?", [password, confirmPassword, email], function (err, data) {
             if (err) return console.log(err);
             res.send({msg: 'Password changed',success: true});
         });
     }
 }
exports.upload = function(req,res) {
    // console.log(req.files,'ok');
        let id = getUserId(req,res);
        // console.log(req.files,'old');
    let filename;
        if (req.files) {
            req.files.forEach(function (file) {
                filename = (new Date).valueOf() + "_" + file.originalname
                fs.rename(file.path, '../frontend/src/assets/images/' + filename, function (err) {
                    if (err) throw err;
                });
            });
                    db.query("UPDATE users SET image=? WHERE id=?", [filename,id], function(err, data) {
                        if(err) return console.log(err);
                        console.log(data)
                        res.json({img: 'inserted'});
                    });


        }

    }
exports.getImagesWork = function(req,res) {
   db.query(`select * from  imagesWork` , function (err,data) {
if(err) return console.log(err);
res.send(data);
   })
}

exports.getImage = function (req,res) {
    let id = getUserId(req,res);
    db.query(`select *from users where id=?`, [id], function (err,data) {
if(err) return console.log(err);
console.log(data);
res.send(data);
      })
}



exports.changePassword = function(req,res){
    let id = getUserId(req, res);
    // console.log(id);
     if(req.body.newpassword !== req.body.confirmpassword) {
       res.json({message: "Password is not same as confirmation"});
     }
     // console.log(req.body);
   const oldpassword = req.body.oldpassword;
       const newpassword = passwordHash.generate(req.body.newpassword);
       const confirmpassword = passwordHash.generate(req.body.confirmpassword);
     db.query(`select * from users where id=?`,[id],function (err,data) {
         if(err) return console.log(err);
         console.log(data);

         if (!passwordHash.verify(oldpassword, data[0].password)){
             res.send({msg: "Enter correct  password"});
         }
         else {
             db.query("UPDATE users SET  password=?, confirmPassword=? WHERE id=?", [newpassword, confirmpassword,id], function(err, data) {
                 if(err) return console.log(err);
                 res.send({msges: 'Password changed'});
             });
             // res.send({message:'passwords equal',success: true});
         }
     })
}



exports.edit = function(req, res){
    const id = req.params.id;
    db.query("SELECT * FROM users WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.send(data);
    });
}
exports.update = function (req, res) {
    console.log(req.body.id);
    const id = req.body.id;
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    // const password = passwordHash.generate(req.body.password);
    // const confirmPassword = passwordHash.generate(req.body.confirmPassword);
    db.query("UPDATE users SET name=?, lastname=?, phone=?, email=?, password=?, confirmPassword=? WHERE id=?", [name, lastname,phone,email,password, confirmPassword,id], function(err, data) {
        if(err) return console.log(err);
        res.send(data);
    });
};

exports.delete = function(req, res){
    console.log(req.body)
    const id = req.params.id;
    db.query("DELETE FROM users WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.send(data);
    });
};



