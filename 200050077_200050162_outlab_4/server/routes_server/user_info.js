const router = require('express').Router()
const pool = require("../utils/db");
const { route } = require('./booking');

router.get("/user-info", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id;
      console.log("ID in session : [user-info] : ", id);

      const user = await pool.query("SELECT * FROM account WHERE id = $1", [
        id
      ]);
      console.log(user.rows[0]);

      return res.status(200).json({
        auth : true,
        user : user.rows[0]
      })
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        // registration: false
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
})

route


module.exports = router;