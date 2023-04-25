const router = require('express').Router()
const pool = require("../utils/db")

router.post("/search-train", async (req, res) => {
  try {

    if (req.session.user) {
      const {f_tno ,f_sp, f_dp, f_doj} = req.body;

      const filtered_trains = await pool.query("SELECT * FROM filter_trains($1, $2, $3, $4 , NULL)", [f_tno, f_sp , f_dp, f_doj]);
      console.log(filtered_trains.rows);

      return res.status(200).json(filtered_trains.rows);
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");

  }
})





router.post("/pnr-search", async (req, res) => {
    try {
  
      if (req.session.user) {
        const {pnr} = req.body ;
  
        const ticket = await pool.query("SELECT * FROM resv WHERE pnr = $1",[pnr]);
  
        return res.status(200).json(ticket.rows)
      } else {
        return res.status(401).json({
          auth: false,
          message: "not authorized",
          registration: false
        })
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
  
    }
  })
  






module.exports = router;