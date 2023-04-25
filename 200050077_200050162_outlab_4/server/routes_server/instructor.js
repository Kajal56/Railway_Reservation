const router = require('express').Router()
const pool = require("../utils/db")

router.get("/allInstructor", async (req, res) => {
  try {
    if (req.session.user) {
      const basic_info = await pool.query("select id, name, dept_name from instructor")
      res.json({
        auth: true,
        basic_info: basic_info.rows
      })
    } else {
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

router.get("/instructor/:instructor_id", async (req, res) => {
  try {
    if (req.session.user) {
      var instructor_id = parseInt(req.params.instructor_id)
      const sem = req.session.user.run_sem
      const year = req.session.user.run_year

      const reg = await pool.query("SELECT name, dept_name FROM instructor where id = $1",
        [instructor_id]
      );

      if (reg.rows.length === 0) {
        return res.status(404).json({
          message: "no instructor found",
          auth: true
        })
      }

      const curr_teaches = await pool.query(
        "select course.course_id, course.title from teaches left join course on teaches.course_id = course.course_id where teaches.id = $1 and year = $2 and semester = $3 order by teaches.course_id",
        [instructor_id, year, sem]
      )

      const prev_teaches = await pool.query(
        "select course.course_id, course.title from teaches left join course on teaches.course_id = course.course_id where teaches.id = $1 and (year <> $2 or semester <> $3) order by year desc, array_position(array['Fall', 'Summer', 'Spring' ], semester)",
        [instructor_id, year, sem]
      )
      
      res.status(200).json({
        auth: true,
        user: reg.rows,
        curr_teaches: curr_teaches.rows,
        prev_teaches: prev_teaches.rows
      })

    } else {
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

module.exports = router