const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config();
const path = require('path')
const morgan = require('morgan')
const connection = require('./.init/mongodb')
const {authroute} = require('./Routes')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');
const {errorhandle} = require('./middlewares/index')
const {notfound} = require('./controllers/notfound')


const app = express();
// app.use(express.json({limit: "500mb"}))
// app.use(bodyParser.urlencoded({ limit: "500mb", extended: true}))
connection()

app.set("view engine", "ejs");
app.use(express.json({limit: "500mb"}))
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true}))
app.use(cookieParser());
app.use(morgan("dev"))
app.set('views', path.join(__dirname, 'views'));
// app.use('/api/v1/auth', authroute);
app.use('/', authroute)
app.use("*", notfound)
app.use(errorhandle)

// const indexRouter = require('./Routes/auth');
// app.use('/', indexRouter);

module.exports = app;