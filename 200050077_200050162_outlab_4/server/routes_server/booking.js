const router = require('express').Router()
const pool = require("../utils/db")

// past and upcomming j
router.get("/mybookings", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;
      const past_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj < CURRENT_DATE ", [id]);
      console.log(past_bookings.rows);
      const upcoming_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj > CURRENT_DATE ", [id]);
      console.log(upcoming_bookings.rows);
      let all_bookings = {};
      all_bookings["past_bookings"] = past_bookings.rows;
      all_bookings["upcoming_bookings"] = upcoming_bookings.rows;

      return res.status(200).json(all_bookings);
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

// books ticket
router.post("/book-ticket", async (req, res) => {
  try {

    if (req.session.user) {
      const { trainno, sp, dp, doj, j_class } = req.body;
      const id = req.session.user.id;
      await pool.query("select insert_reservation ($1 , $2, $3 , $4 , $5 , $6 , $7 )", [id, trainno, sp, dp, doj, j_class, 1]);

      return res.status(200).json({
        resv: true
      });
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

//-----------------------------------

// cancel ticket
router.post("/cancel-ticket", async (req, res) => {
  try {

    if (req.session.user) {
      const { pnr } = req.body;
      await pool.query("select insert_into_canc ($1 , $2 )", [pnr, 1500]);

      return res.status(200).json({
        canc: true
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