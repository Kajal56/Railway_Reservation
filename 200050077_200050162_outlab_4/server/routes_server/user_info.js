const router = require('express').Router()
const pool = require("../utils/db")

router.get("/user-info", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;

      const user = await pool.query("SELECT * FROM account WHERE id = $1", [
        id
      ]);

      return res.status(200).json(user.rows)
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
})


module.exports = router;