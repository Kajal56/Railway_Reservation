const router = require('express').Router()
const pool = require("../utils/db")

// select * from course where course_id = 'CS-315' and course_id in (select course_id from teaches where year = 2018);

router.get("/course/dept/running", async (req, res) => {
  try {
    if (req.session.user) {
      const sem = req.session.user.run_sem
      const year = req.session.user.run_year

      // "select c.dept_name from teaches as t left join course as c on c.course_id = t.course_id where year = $1"
      const dept = await pool.query(
        "select distinct c.dept_name from teaches as t left join course as c on c.course_id = t.course_id where year = $1 and semester = $2",
        [year, sem]
      );
      return res.status(200).json({
        auth: true,
        dept_name: dept.rows
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


router.get("/course/running/:dept", async (req, res) => {
  try {
    if (req.session.user) {
      const dept = req.params.dept
      const year = req.session.user.run_year
      const sem = req.session.user.run_sem
      const dept_courses = await pool.query(
        "select t.course_id from teaches as t left join course as c on t.course_id = c.course_id where dept_name = $1 and year = $2 and semester = $3",
        [dept, year, sem]
      );

      return res.status(200).json({
        auth: true,
        course: dept_courses.rows
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

router.get("/course/info/:course_id", async (req, res) => {
  try {
    if (req.session.user) {
      const course_id = req.params.course_id.toString()
      const year = req.session.user.run_year
      const sem = req.session.user.run_sem

      const info = await pool.query(
        "select distinct course.course_id as course_id, course.title as title, course.credits as credits, section.building as building, section.room_number as room_no from course left join section on section.course_id = course.course_id where course.course_id = $1",
        [course_id]
      );

      const prereq = await pool.query("select * from prereq where course_id = $1 ",
        [course_id]
      )

      const inst = await pool.query("select distinct teaches.id as id, instructor.name as name from teaches join instructor on teaches.id = instructor.id where course_id = $1",
        [course_id]
      )

      return res.status(200).json({
        auth: true,
        course_info: info.rows,
        pre: prereq.rows,
        inst: inst.rows
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

// router.get("/course/dereg/:course_id", async (req, res) => {
//   try {
//     const course_id = parseInt(req.params.course_id)

//     const id = req.session.user
//     const d = new Date();
//     let year = d.getFullYear();
//     year = 2018

//     const reg = await pool.query("SELECT * FROM takes WHERE id = $1 and course_id = $2 and year = $3",
//       [id, course_id, year]
//     );

//     if (reg.rows.length === 0) {
//       return res.json({
//         message: "not registed",
//         auth: true
//       })
//     }

//     const del_course = await pool.query(
//       "DELETE FROM takes WHERE id = $1 and course_id = $2 RETURNING *",
//       [id, course_id]
//     );

//     console.log(del_course)

//     if (req.session.user) {
//       res.json({
//         message: "user logged in",
//         auth: true
//       })
//     } else {
//       res.json({
//         message: "user not logged in",
//         auth: false
//       })
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

module.exports = router