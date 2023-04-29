const router = require("express").Router();
const pool = require("../utils/db");

router.post("/search-train", async (req, res) => {
  try {
    // console.log("check 1");
    let { f_sp, f_dp, f_doj, f_class } = req.body;
    if (!f_sp) f_sp = null;
    if (!f_sp) f_sp = null;
    if (f_class == "ANY") f_class = null;
    console.log(req.body);
    const filtered_trains = await pool.query(
      "SELECT * FROM filter_trains($1, $2, $3, $4 , $5)",
      [null, f_sp, f_dp, f_doj, f_class]
    ); //Wanted to search by tno but kept null because search by this is not needed.
    console.log(filtered_trains.rows);
    console.log("check 2");
    return res.status(200).json(filtered_trains.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.post("/pnr-search", async (req, res) => {
  try {
    const { pnr } = req.body;

    const ticket = await pool.query("SELECT * FROM resv WHERE pnr = $1", [pnr]);

    return res.status(200).json(ticket.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
