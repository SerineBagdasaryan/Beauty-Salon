const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const DB = require('./models/db');
const passwordHash = require('password-hash');
passport.serializeUser(function (user,done) {
    done(null,user.id);
    // console.log(user,'serialize');
});
passport.deserializeUser(function (id,done) {
DB.query(`select * from users where id =?`, [id], function (err,user) {
done(err,user);
});
});
passport.use('local',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},function (email,password,done) {
 DB.query(`select * from users where email=?`, [email], function (err,user) {
  // console.log(email);
  // console.log(password);
  // console.log(user[0],'hy');
  // console.log(user[0].password);
  if (err){ return done(err); }
  if(!user[0]){
return done(null,false, {message: 'Incorrect username'});
  }
    if(!passwordHash.verify(password, user[0].password)) {
         // console.log(password, user[0].password);
      return done(null,false, {message: 'Incorrect password'});
  }
  return done(null,user[0]);
 })
    }

    ))