const router = require('express').Router()
const pool = require("../utils/db")


//check if admin

router.get("/is-admin", async (req, res) => {
  try {

    if (req.session.user) {
      const id = req.session.user.id;
      const result = await pool.query("select * from AdminUser where id = $1 ", [id]);
      
      if(result.rows.length==0){
        return res.status(200).json({
          isAdmin: false,
          id : id
        });  
      }
      return res.status(200).json({
        isAdmin: true
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


//----------------------Recoverability purposes----------------------
// router.get("/is-admin", async (req, res) => {
//     try {
//       if (req.session.user) {
//         const id = req.session.user.id;
//         // if()
//         const res = await pool.query("SELECT * from AdminUser where id = $1",[id]);
//         if(res.rows.length ==0 ){
//           console.log("Heyyyy");
//             return res.json({
//                 isAdmin : false,
//                 id : res.rows[0],
//                 status: 200
//             });
//         }
//         else{
//             return res.status(200).json({
//                 isAdmin : true,
//                 id : res.rows[0]
//             })
//         }
//       } else {
//         return res.status(401).json({
//           auth: false,
//           message: "not authorized",
//           registration: false
//         });
//       }
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Server error");
  
//     }
//   })
  
router.post("/add-classseat", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;
      const {trainno , sp, dp, doj, j_class , fare, seatsleft} = req.body;
      // console.log("Add-classseat------class" : )
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
router.post("/add-train", async (req, res) => {
    try {
      if (req.session.user) {
        console.log("Add train API called")
        const id = req.session.user.id;
        const {tname , sp,st, dp,dt, dd, distance} = req.body;
        await pool.query("insert into train (tname, sp, st, dp, dt, dd, distance) values ($1, $2, $3, $4, $5, $6, $7) ",[tname , sp,st, dp,dt, dd, distance]) ;
        const response_id = await pool.query("SELECT * FROM train ORDER BY ctid DESC LIMIT 1;");
        return res.status(200).json({
          add_train : true,
          tid : response_id.rows[0]
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
router.post("/make-admin", async (req, res) => {
    try {
      if (req.session.user) {
        const id = req.session.user.id;
        const {to_be_admin} = req.body;
        console.log(req.body)
        console.log(to_be_admin)
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