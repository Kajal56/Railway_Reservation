const router = require('express').Router()
const pool = require("../utils/db")


//check if admin
router.get("/is-admin", async (req, res) => {
    try {
      if (req.session.user) {
        const id = req.session.user.id;
        // if()
        const res = await pool.query("SELECT * from AdminUser where id = $1",[id]);
        if(res.rows.length ==0 ){
            return res.status(200).json({
                isAdmin : false,
                id : res.rows[0]
            });
        }
        else{
            return res.json.status(200).json({
                isAdmin : true,
                id : res.rows[0]
            })
        }
      } else {
        return res.status(401).json({
          auth: false,
          message: "not authorized",
          registration: false
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
  
    }
  })
  
router.get("/add-classeats", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;
      const {trainno , sp, dp, doj, j_class , fare, seatsleft} = req.body;
      await pool.query("insert into classseats values ($1, $2, $3, $4, $5, $6, $7) ",[trainno , sp, dp, doj, j_class , fare, seatsleft]) ;
      return res.status(200).json({
        add_classseat : true
      });
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");

  }
})


//-------------------------------
//----------------------------add train 
router.get("/add-train", async (req, res) => {
    try {
      if (req.session.user) {
        const id = req.session.user.id;
        const {tname , sp,st, dp,dt, dd, distance} = req.body;
        await pool.query("insert into train values ($1, $2, $3, $4, $5, $6, $7) ",[tname , sp,st, dp,dt, dd, distance]) ;
        return res.status(200).json({
          add_train : true
        });
      } else {
        return res.status(401).json({
          auth: false,
          message: "not authorized",
          registration: false
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
  
    }
  })
  
// ------------------------------------Make someone admin
router.get("/make-admin", async (req, res) => {
    try {
      if (req.session.user) {
        const id = req.session.user.id;
        const {to_be_admin} = req.body;
        await pool.query("insert into AdminUser values ($1) ",[to_be_admin]) ;
        return res.status(200).json({
          add_admin : true
        });
      } else {
        return res.status(401).json({
          auth: false,
          message: "not authorized",
          registration: false
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
  
    }
  })


module.exports = router;