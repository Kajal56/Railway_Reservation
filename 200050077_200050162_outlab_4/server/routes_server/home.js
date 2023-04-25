const router = require('express').Router()
const pool = require("../utils/db")

router.get("/home", async (req, res) => {
  try {

    if (req.session.user) {
      const id = req.session.user.id
      const sem = req.session.user.run_sem
      const year = req.session.user.run_year

      const user = await pool.query("SELECT * FROM student WHERE id = $1", [
        id
      ]);

      const prev_courses = await pool.query(
        "select * from takes where id = $1 and (year <> $2 or semester <> $3) order by year desc, array_position(array['Fall', 'Summer', 'Spring' ], semester)",
        [id, year, sem]
      );

      // "select * () x except select * from takes where id = $1 and year = $2 and semester = $3", 
      const curr_courses = await pool.query(
        "select * from takes where id = $1 and year = $2 and semester = $3 ",
        [id, year, sem]
      );

      const dis_sem_year = await pool.query("select semester,  year from reg_dates where semester <> $1 or year <> $2 order by year desc, array_position(array['Fall', 'Summer', 'Spring' ], semester)",
        [sem, year]
      );
      
      const data = dis_sem_year.rows 
      // console.log(dis_sem_year.rows)

      for (let i=0; i<data.length; i++) {
        var prev = await pool.query("select * from takes where id = $1 and year = $2 and semester = $3",
          [id, data[i].year, data[i].semester]
        )
        console.log(id, data[i].year, data[i].semester, prev.rows)
        data[i].courses = prev.rows
      }

      // console.log(data)

      return res.status(200).json({
        auth: true,
        user: user.rows,
        curr_courses: curr_courses.rows,
        prev_courses: prev_courses.rows,
        prev: data
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