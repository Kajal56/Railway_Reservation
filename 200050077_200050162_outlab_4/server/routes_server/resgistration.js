const router = require('express').Router()
const pool = require("../utils/db")

router.post("/course/reg/:course_id/:sec_id", async (req, res) => {
  try {
    if (req.session.user) {
      
      const course_id = req.params.course_id
      const sec_id = req.params.sec_id
      const id = req.session.user.id
      const year = req.session.user.run_year
      const sem = req.session.user.run_sem

      const check_ar = await pool.query("Select * from takes where id = $1 and course_id = $2",
        [id, course_id]
      );

      if (check_ar.rows.length !== 0) {
        return res.status(403).json({
          auth: true,
          message: "already registered",
          registered: false
        })
      }

      const check_pr = await pool.query("select prereq_id from prereq where course_id = $1 except select course_id from takes where id = $2 and (semester <> $3 or year <> $4) ",
        [course_id, id, sem, year]
      )

      console.log(check_pr.rows)

      if (check_pr.rows.length !== 0) {
        return res.status(403).json({
          auth: true,
          message: "prereq not done",
          registered: false
        })
      }

      const slot = await pool.query(
        "select s1.time_slot_id as slot from section as s1 where course_id = $1 and sec_id = $2",
        [course_id, sec_id]
      )

      console.log(slot.rows)
      const occupied_slots = await pool.query("select s.time_slot_id as slot from takes as t join section as s on t.course_id = s.course_id and t.sec_id = s.sec_id where t.id = $1 and t.semester = $2 and t.year = $3 and t.course_id <> $4",
        [id, sem, year, course_id]
      )

      let check_sc = false;
      for (r in occupied_slots.rows) {
        if (slot.rows[0].slot === r.slot) check_sc = true
      }

      if (check_sc) {
        return res.status(403).json({
          auth: true,
          message: "slot clash",
          registration: false
        })
      }

      console.log("everything fine till here")
      const insertInTakes = await pool.query("INSERT INTO takes VALUES ($1, $2, $3, $4, $5)",
        [id, course_id, sec_id, sem, year]
      )
      return res.status(200).json({
        auth: true,
        message: "registration succesful",
        registration: true
      })
    }else{
      return res.status(401).json({
        auth: false,
        message: "not authorized",
        registration: false
      })
    }
  } catch (error) {
    console.log(error)
  }
})


router.get("/registration/running", async (req, res) => {
  try {
    if (req.session.user) {
      const id = req.session.user.id
      const year = req.session.user.run_year
      const sem = req.session.user.run_sem

      const courses = await pool.query(
        "select distinct t.course_id, c.title from teaches as t left join course as c on t.course_id = c.course_id where year = $1 and semester = $2",
        [year, sem]
      );

      console.log()
      for (let i = 0; i < courses.rows.length; i++) {
        let cid = courses.rows[i].course_id;
        let sections = await pool.query("select distinct sec_id from section where course_id = $1 and semester = $2 and year = $3",
          [cid, sem, year]
        )
        courses.rows[i].sec = sections.rows
        courses.rows[i].curr_sec = sections.rows[0].sec_id
      }

      return res.status(200).json({
        auth: true,
        msg: "you are awesome",
        courses: courses.rows
      })
    } else {
      return res.status(401).json({
        auth: false,
        message: "not authorized to see running courses"
      })
    }

  } catch (error) {
    console.log(error)
  }
})


router.post("/course/dereg/:course_id", async (req, res) => {
  try {

    if (req.session.user) {
      const course_id = req.params.course_id
      const id = req.session.user.id
      const year = req.session.user.run_year
      const sem = req.session.user.run_sem

      const reg = await pool.query("SELECT * FROM takes WHERE id = $1 and course_id = $2 and year = $3 and semester = $4",
        [id, course_id, year, sem]
      );

      if (reg.rows.length === 0) {
        return res.status(404).json({
          message: "not registed",
          auth: true,
          dereg: false
        })
      }

      const del_course = await pool.query(
        "DELETE FROM takes WHERE id = $1 and course_id = $2",
        [id, course_id]
      );

      return res.status(200).json({
        auth: true,
        message: "degeristeed succesfull",
        dereg: true,
      })

    } else {
      return res.status(401).json({
        auth: false,
        message: "degeristeed succesfull cause not login",
        dereg: false,
      })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router