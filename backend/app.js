const express = require('express');
const app = express();
const session = require('express-session');
const userRouter = require('./routes/userRoutes');
const homeRouter = require('./routes/homeRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const teamRouter = require('./routes/teamRoutes');
const priceRouter = require('./routes/priceRoutes');
const contactRouter = require('./routes/contactRoutes');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registrationRoutes');
const adminRouter = require('./routes/adminRoutes');

const passport = require('passport');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');
const cors = require('cors');
const secret = 'secret';

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, _id");
    res.header("Access-Control-Expose-Headers: Authorization");
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Set-Cookie", "HttpOnly; Secure; SameSite = Strict");

    next();
});
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(userRouter);
app.use(homeRouter);
app.use(serviceRouter);
app.use(teamRouter);
app.use(priceRouter);
app.use(contactRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(adminRouter);


app.listen(3000, () => {
    console.log('App running at 3000')
});
