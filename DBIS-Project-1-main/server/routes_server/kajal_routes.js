const router = require('express').Router()
const pool = require("../utils/db")



//-------------------------------------------------------------------------------------------------

router.post("/login", async (req, res) => {
  console.log("check1");
    const { emailid, password } = req.body;
    try {
      const user = await pool.query("SELECT * FROM account WHERE emailid = $1", [
        emailid
      ]);
      console.log("check2");
      
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential: no user found");
      }
      if (password != user.rows[0].password) {
        return res.json({
            auth: false,
            message: "Invalid Password"
          })
      }

      console.log("check3");
        req.session.user = {id:user.rows[0].id};
        console.log("session user id : ",req.session.user);
        res.json({
        auth: true,
        message: "successful login"
      })
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  router.get("/home", async (req, res)=>{
    try {
      console.log("first");
      console.log("user : ",req.session.user);
      
      // if(!req.session.user){
      // return  res.status(500).send("not logged in");
      // }
      const user = await pool.query("SELECT * FROM account WHERE id = $1",[req.session.user.id]);
      return res.json(user.rows[0]);
      } catch (err) {
      console.log("heyloo atleast");
      console.log(err);
      res.status(500).send(("Server error"));      
    }

  })


  
  router.get("/user-info", async (req, res)=>{
    try {
      // console.log("first");
      console.log("user : ",req.session.user);
      
      // if(!req.session.user){
      // return  res.status(500).send("not logged in");
      // }
      const user = await pool.query("SELECT * FROM account WHERE id = $1",[req.session.user.id]);
      return res.json(user.rows[0]);
      } catch (err) {
      // console.log("heyloo atleast");
      console.log(err);
      res.status(500).send(("Server error"));      
    }

  })





    
  router.get("/mybookings", async (req, res)=>{
    try {
      // console.log("first");
      console.log("user : ",req.session.user);
      
      // if(!req.session.user){
      // return  res.status(500).send("not logged in");
      // }
      // let date = new Date();
      // console.log(date);
      const past_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj < CURRENT_DATE ",[req.session.user.id]);
      console.log(past_bookings.rows);
      const upcoming_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj > CURRENT_DATE ",[req.session.user.id]);
      console.log(upcoming_bookings.rows);
      let all_bookings = { };
      all_bookings["past_bookings"] = past_bookings.rows;
      all_bookings["upcoming_bookings"] = upcoming_bookings.rows ;
      // const user = await pool.query("SELECT * FROM account WHERE id = $1",[req.session.user.id]);
      return res.json(all_bookings);
      } catch (err) {
      console.log("heyloo atleast");
      console.log(err);
      res.status(500).send(("Server error"));      
    }

  })

  

  router.post("/pnr-search", async (req, res)=>{
    try {
      // console.log("first");
      console.log("user : ",req.session.user);
      
      // if(!req.session.user){
      // return  res.status(500).send("not logged in");
      // }
      const {pnr} = req.body ;
      const ticket = await pool.query("SELECT * FROM resv WHERE pnr = $1",[pnr]);
      
      if(!ticket.rows){
        return res.status(500).send("PNR requested not found");
      }
      row = ticket.rows[0];

      // if(row.id != req.session.user){
      //   return res.status(500).send("I'm not sure if this information concerns you");
      // }

      return res.json(row);
      } catch (err) {
      // console.log("heyloo atleast");
      console.log(err);
      res.status(500).send(("Server error"));      
    }

  })



  router.post("/search-train" ,async (req, res) =>{
    try {
      const {f_tno ,f_sp, f_dp, f_doj , f_class} = req.body ;

      // const {f_sp , f_dp, doj , f_class} = req.body ;
      const filtered_trains = await pool.query("SELECT * FROM filter_trains($1, $2, $3, $4 , NULL)", [f_tno, f_sp , f_dp, f_doj]);
      console.log(filtered_trains.rows);
      res.json(filtered_trains.rows);

    /* ---------------pass parameters like this from frontend ---------------------------
          {
            "f_sp" : "Chandigarh",
            "f_dp" : null,
            "f_doj" : null ,
            "f_class" : null,
            "f_tno" : null
        }
      
    */
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error ");
    }
  })

  router.get("/refund-history",async (req ,res) =>{
    try {
      console.log("hii");
      const user_id = req.session.user.id ;
      const r_hist = await pool.query("Select * from refund_history natural join resv where id = $1", [user_id]);
      return res.json(r_hist.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  })


  router.get("/refund-history",async (req ,res) =>{
    try {
      console.log("hii");
      const user_id = req.session.user.id ;
      const r_hist = await pool.query("Select * from refund_history natural join resv where id = $1", [user_id]);
      return res.json(r_hist.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  })




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
  /*
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
  
  */

  /*
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
  
*/

//------------------------------------------------------------------------------------

router.get("/test", async (req, res) => {
    try {
        id = 1;
        const stu = await pool.query("SELECT * FROM canc");
        return res.status(200).json({
            auth: true,
            students: stu.rows
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})

router.get("/gettrains", async (req, res) => {
    try {
        id = 1;
        const stu = await pool.query("SELECT * FROM account");
        return res.status(200).json({
            auth: true,
            students: stu.rows
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})


router.post("/register", async (req, res) => {
    try {
        id = 1;
        console.log(req.body);
        const {emailid , password , mobileno , dob} = req.body;
        console.log(emailid);
        await pool.query("Insert into account (emailid, password, mobileno, dob) values ($1,$2,$3,$4)",[emailid,password,mobileno,dob])
        // const stu = await pool.query("SELECT * FROM account");
        return res.status(200).json({
            // auth: true,
            // students: stu.rows
            success: true
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})








module.exports = router