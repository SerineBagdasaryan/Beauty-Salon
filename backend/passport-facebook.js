// id : 1293151510893051
// secret :25c91df6e1c9cc108580c06a8b774e2e
const db = require('./models/db')
let passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
        clientID: '296834631209222',
        clientSecret: '993adb6978274c114031bf2c3e743746',
        // callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'email', 'gender','displayName','link','locale', 'name', 'timezone', 'updated_time', 'verified','picture.type(large)'],
        // enableProof :  true,

    },
    function(accessToken, refreshToken, profile, done) {
    console.log(profile,accessToken);
        console.log(profile, profile.displayName);
        let facebook_id = profile.id;
        let name =  profile.name.givenName;
        let lastname = profile.name.familyName;
        console.log(name);
        const role = 2;
        db.query("SELECT * FROM users WHERE facebook_id=?", [facebook_id], function(err, data) {
            if(err) throw err;
            if(data && data.length === 0) {
                            console.log("There is no such user, adding now");
                db.query("INSERT INTO users ( name,lastname,role,facebook_id) VALUES (?,?,?,?)", [name,lastname, role,facebook_id], function (err, data) {
                    console.log("inserted")
        })} else {
                console.log("User already exists in database");
            }
            })
            }
    //     db.query("SELECT * from users where facebook_id="+profile.id, (err,rows) => {
    //         if(err) throw err;
    //         if(rows && rows.length === 0) {
    //             console.log("There is no such user, adding now");
    //             db.query("INSERT into users(facebook_id,name) VALUES('"+profile.id+"','"+profile.displayName+"')");
    //         } else {
    //
    //         }
    // });

));


passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});