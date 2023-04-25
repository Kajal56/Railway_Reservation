const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
const conObject = require('./utils/conObject');

// middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const fs = require('fs')
 

const store = new (require('connect-pg-simple')(session))({
  conObject, 
  createTableIfMissing:true
})


app.use(cookieParser())

const twoHour = 1000 * 60 * 60 * 2;
app.use(session({
  key: 'user_sid',
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: false,
  cookie: {
    maxAge: twoHour,
    secure: false
  },
  resave: false,
  store: store, 
  createTableIfMissing: true
}));

app.use("/auth", require('./routes_server/logRegEP'));
app.use("/auth", require('./routes_server/home'));
app.use("/auth", require('./routes_server/instructor'));
app.use("/auth", require('./routes_server/course'));
app.use("/auth", require('./routes_server/resgistration'));


app.listen(8080, () => {
  console.log("server is running on port 8080")
})

// app.use((req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     req.redirect('/home')
//   }
//   next()
// })

// var sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_id) {
//     res.redirect('home')
//   } else {
//     next()
//   }
// }

// app.get('/', sessionChecker, (req, res) => {
//   res.redirect('/login')
// })

// app.route('/login')
//   .get(sessionChecker, (req, res) => {
//     res.sendFile(__dirname + "/public/login.html")
//   })


// app.get('/', (req, res) => {
//   session = req.session
//   if(session.userId){
//     res.send()
//   }
// })


// app.use(
//   session({
//     key:'user_sid',
//     secret: 'random_stuff',
//     resave: false,
//     saveUninitialized: false,
//     cookie:{
//       expires:3600000
//     }
//   })
// )

// app.use((req, res, next) => {
//   if(req.session.user && req.cookies.user_sid) {
//     res.redirect('/home')
//   }
//   next()
// })

// var sessionChecker = (req, res, next) => {
//   if(req.session.user && req.cookies.user_sid) {
//     res.redirect('/home')
//   }else{
//     next()
//   }
// }

//ROUTERS

// register and login routes

// app.get('/', sessionChecker, (res, req) => {
//   res.redirect('/login')
// })