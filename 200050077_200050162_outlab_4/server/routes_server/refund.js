const router = require('express').Router()
const pool = require("../utils/db")

router.get("/refund", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;
      console.log(id);
      const refunds = await pool.query("SELECT * FROM resv natural join refund_history WHERE id = $1", [
        id
      ]);
      return res.status(200).json(refunds.rows);
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
})

module.exports = router;