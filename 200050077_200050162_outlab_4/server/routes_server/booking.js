const router = require('express').Router()
const pool = require("../utils/db")

// past and upcomming j
router.get("/mybookings", async (req, res) => {
  try {
    // if (req.session.user) {
      // const id = req.session.user.id;
      id = 1;
      console.log("Accessed my_bookings API")
      const past_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj < CURRENT_DATE order by doj", [id]);
      // console.log(past_bookings.rows);
      const upcoming_bookings = await pool.query("SELECT * FROM resv WHERE id = $1 and doj > CURRENT_DATE order by doj", [id]);
      // console.log(upcoming_bookings.rows);
      let all_bookings = {};
      all_bookings["past_bookings"] = past_bookings.rows;
      all_bookings["upcoming_bookings"] = upcoming_bookings.rows;
      console.log(all_bookings) ;
      return res.status(200).json(all_bookings);
    // } else {
    //   return res.status(401).json({
    //     auth: false,
    //     message: "not authorized",
    //     registration: false
    //   });
    // }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");

  }
})


//-------------------------------

// books ticket
router.post("/book-ticket", async (req, res) => {
  try {

    // if (req.session.user) {
      console.log(req.body) ;
      const { trainno, sp, dp, doj, j_class } = req.body;
      // const id = req.session.user.id;
      id =1 ;
      await pool.query("select insert_reservation ($1 , $2, $3 , $4 , $5 , $6 , $7 )", [id, trainno, sp, dp, doj, j_class, 1]);
      const response_pnr = await pool.query("SELECT * FROM resv ORDER BY ctid DESC LIMIT 1;");
      console.log(response_pnr.rows);

      // return res.status(200).json({
      //   booked_pnr : response_pnr[0],
      //   // resv: true
      // });
      return res.status(200).json(response_pnr.rows[0]);
    // } else {
    //   return res.status(401).json({
    //     auth: false,
    //     message: "not authorized",
    //     registration: false
    //   })
    // }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

//-----------------------------------

// cancel ticket
router.post("/cancel-ticket", async (req, res) => {
  try {

    // if (req.session.user) {
      const { pnr } = req.body;
      await pool.query("select insert_into_canc ($1 , $2 )", [pnr, 1500]);

      return res.status(200).json({
        canc: true
      });
    // } else {
    //   return res.status(401).json({
    //     auth: false,
    //     message: "not authorized",
    //     registration: false
    //   });
    // }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})


module.exports = router;