const router = require('express').Router()
const pool = require("../utils/db")
const bcrypt = require("bcrypt")

router.post("/login", async (req, res) => {
  const { emailid, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM account WHERE emailid = $1", [
      emailid
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential: no user found");
    }
    if (password != user.rows[0].password) {
      return res.json({
        auth: false,
        message: "Invalid Password"
      });
    }
    console.log("check3");
    req.session.user = { id: user.rows[0].id };
    console.log("session user id : ", req.session.user);
    res.json({
      auth: true,
      message: "successful login"
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { emailid, password, mobileno, dob } = req.body;
    users = await pool.query("select * from account where emailid = $1", [emailid]);
    if (users.rows.length !== 0) {
      return res.status(401).json("user already exists");
    }
    await pool.query("Insert into account (emailid, password, mobileno, dob) values ($1,$2,$3,$4)", [emailid, password, mobileno, dob])
    return res.status(200).json({
      success: true
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
})

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.json({
    auth: false
  });
})



module.exports = router;
