const router = require('express').Router()
const pool = require("../utils/db")
const bcrypt = require("bcrypt")


router.post("/login", async (req, res) => {
  const { id, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      id
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential: no user found");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].hashed_password
    );

    if (!validPassword) {
      return res.json({
          auth: false,
          message: "denied login"
        })
    }

    const running_courses = await pool.query("select * from reg_dates order by start_time desc")
    if(running_courses.rows.length !== 0){
      req.session.user = {id:id, run_sem: running_courses.rows[0].semester, run_year: running_courses.rows[0].year}
    }else{
      req.session.user = {id:id}
    }

    res.json({
      auth: true,
      message: "successful login"
    })

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


router.get("/has", (req, res) => {
  try {

    if(req.session.user) {
      // console.log(req.session.user)
      res.json({
        message: "user logged in",
        auth: true
      })
    }else{
      res.json({
        message: "user not logged in",
        auth: false
      })
    }
  } catch (error) {
    console.log(error) 
  }
})

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.json({
    auth:false
  })
})

router.delete("", ({ session }, res) => {
  try {
    const user = session.user;
    if (user) {
      session.destroy(err => {
        if (err) throw (err);
        res.clearCookie(SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (err) {
    res.status(422).send(parseError(err));
  }
});


router.post("/register", async (req, res) => {
  const {id, password} = req.body

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      id
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).json("user already exists");
    }

    const saltRound = 10; 
    var hashed;         
    bcrypt
    .hash(password, saltRound)
    .then(hash => {
      hashed = hash
      const insertQ = pool.query("INSERT INTO users values ($1, $2) returning *", [id, hash])
      return insertQ
    .then(insertQ => {
      res.json(insertQ.rows[0])
    })
    });

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;

// register 

// const now = pool.query("SELECT * FROM users", (err, res) => {
//   if (err) {
//     console.log("an error has occured")
//   }else{
//     console.log(res.rows)
//   }
// });


// router.post("/register", async (req, resq) => {
//   try {
//     const {id, password} = req.body;

//     pool.query("SELECT * FROM users where id ilike \'" + id + "\';", (err, res) => {
//         if (err) {
//           console.log(err.stack)
//         }else if (res.rows.length != 0){
//           console.log("user id already exists")
//           // resq.send(401).send('Status: user exists')
//         }else {
//           console.log("2")
//           console.log(res.rows[0])
//           const saltRound = 10;          
//           bcrypt
//           .hash(password, saltRound)
//           .then(hash => {
//             console.log('Hash ', hash)
//             pool.query (
//               "INSERT into users {id, password} values (\'$1\', $2) returning *", 
//               [id, hash], (err, res) => {
//                 if(err){
//                   console.log(err)
//                   // res.json("error aa gya")
//                 }else{
//                   // resq.json(res.rows[0])
//                 }
//               }
//             );
//           })
//         }
//       });

//     // if(out == 1) console.log("not null")
//     // const user = await pool.query("select * from users where id like " + "\'" + id + "\'");
//     // await console.log("yo")

//     // // if(user.row.length !== 0){
//     // //   return res.status(401).send("User already exists")
//     // // }

//     // const saltRound = 10;

//     // const x = bcrypt
//     // .hash(password, saltRound)
//     // .then(hash => {
//     //   console.log('Hash ', hash)
//     //   const newUser = pool.query
//     //   ("INSERT into users {id, password} values ($1, $2) returning *", 
//     //     [id, hash]
//     //   );
//     // })

//     // res.json("yo")
    

//     // console.log(x);
//     // const salt = await bcrypt.genSalt(saltRound)

//     // const bcyptPassword = await bcrypt.hash(password,salt);

//     // const newUser = await pool.query
//     //   ("INSERT into users {id, password} values ($1, $2) returning *", 
//     //   [id, bcyptPassword]
//     // );  
    
//     // res.json(newUser.rows[0])

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error")
//   }
// })

