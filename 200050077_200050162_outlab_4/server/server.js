const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const conObject = require('./utils/conObject')


// middleware 
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


// session 
const store = new (require('connect-pg-simple')(session))({
   conObject, 
   createTableIfMissing:true
})

const twoHour = 1000 * 60 * 60 * 2;
app.use(session({
  key: 'id',
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


// Paths
app.use("/auth", require('./routes_server/logReg'));
app.use("/api", require('./routes_server/refund'));
app.use("/api", require('./routes_server/booking'));
app.use("/api", require('./routes_server/user_info'));
app.use("/api", require('./routes_server/train'));



app.listen(5000, () => {
  console.log("server is running on port 5000")
})
