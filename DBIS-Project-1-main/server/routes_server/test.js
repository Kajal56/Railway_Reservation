const router = require('express').Router()
const pool = require("../utils/db")

router.get("/test", async (req, res) => {
    try {
        id = 1;
        const stu = await pool.query("SELECT * FROM canc");
        return res.status(200).json({
            auth: true,
            students: stu.rows
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})

router.get("/gettrains", async (req, res) => {
    try {
        id = 1;
        const stu = await pool.query("SELECT * FROM account");
        return res.status(200).json({
            auth: true,
            students: stu.rows
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})


// router.post("/register", async (req, res) => {
//     try {
//         id = 1;
//         console.log(req.body);
//         const {emailid , password , mobileno , dob} = req.body;
//         console.log(emailid);
//         await pool.query("Insert into account (emailid, password, mobileno, dob) values ($1,$2,$3,$4)",[emailid,password,mobileno,dob])
//         // const stu = await pool.query("SELECT * FROM account");
//         return res.status(200).json({
//             // auth: true,
//             // students: stu.rows
//             success: true
//         })
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).send("Server error");
//     }
// })


module.exports = router