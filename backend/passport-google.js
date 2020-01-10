
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./models/db');
const userController = require("./controllers/UserController");
// passport.serializeUser(function (user,done) {
//     done(null,user.id);
//     console.log(user,'serialize');
//
// });
// passport.deserializeUser(function (id,done) {
//     DB.query(`select * from users where id =?`, [id], function (err,user) {
//         done(err,user);
//         console.log(user,'hello');
//     });
// });
passport.use(new GoogleStrategy({                 //'google', strategy
        callbackURL: 'http://localhost:3000/auth/google/redirect',
        // clientID: '425734756490-bhflhfe0rtrnls7t0hqr2ieeg8b8frr4.apps.googleusercontent.com',
        clientID: '425734756490-bhflhfe0rtrnls7t0hqr2ieeg8b8frr4.apps.googleusercontent.com',
        clientSecret: 'NZmPEOs60KZG381rz0LRjYHk',
        passReqToCallback: true
    },
    function(req,accessToken, refreshToken, profile, done) {
        // console.log('here is req.user'+ req.user);
        // console.log( profile, profile.emails[0],accessToken);
        let google_id = profile.id;
        // let name =  profile.name.givenName;
        // let lastname = profile.name.familyName;
        const name = profile.displayName;
        let email = profile.emails[0].value;
        let google_token = accessToken;
        let image = profile.photos[0].value;
        // console.log(name);
        const role = 2;
        db.query("SELECT * FROM users WHERE google_id=?", [google_id], function(err, data) {
            if(err) throw err;
            if(data && data.length === 0) {
                // userController.userGoogle(true);
                console.log("There is no such user, adding now");
                db.query("INSERT INTO users ( name,email, role,google_id,google_tokconsten) VALUES (?,?,?,?,?)", [name, email,role,google_id,google_token], function (err, data) {
                    // console.log("inserted")
                })} else {
                console.log("User already exists in database");
            }
        })
    }

    // function(token, tokenSecret, profile,email) {
    // console.log(profile.emails[0].value,'em');
    //     db.query("SELECT * from users where google_id="+profile.id, (err,rows) => {
    //         if(err) throw err;
    //         if(rows && rows.length === 0) {
    //             console.log("There is no such user, adding now");
    //             db.query("INSERT into users(google_id, name) VALUES('"+profile.id+"','"+profile.displayName+"')");
    //         } else {
    //             console.log("User already exists in database");
    //         }
    //     });
    //
    // }
    )
);

