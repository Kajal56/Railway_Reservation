import React, { useState} from "react"
import { useParams, Link } from 'react-router-dom'
import { getCoursesInfo } from "./auth-api";

import {
  Box,
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';


function CourseInfo() {

  const [course, setCourse] = useState({})
  const { course_id } = useParams()

  console.log(course_id)
  const CourseInfo = async (course_id) => {
    try {
      setCourse({})
      const res = await getCoursesInfo(course_id)
      console.log(res)
      setCourse(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  React.useEffect(() => {
    CourseInfo(course_id)
  }, [course_id])


  return (
    <>
      <h1>
        Course Info
      </h1>
      <Box width='60%' pt={3}>
        <TableContainer component={Paper} width="100%">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" >
                  course_id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Courese Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Credits
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Building
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Room No.
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              course.course_info?.map((row) => (
                <TableRow
                  key={row.course_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.course_id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.credits}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.building}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.room_no}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
        <TableContainer component={Paper} width="100%">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" >
                  Course
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Prereq
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              course.pre?.map((row) => (
                <TableRow
                  key={row.prereq}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.course_id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      <Link to={'/course/' + row.prereq_id} >
                        {row.prereq_id}
                      </Link>
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
        <TableContainer component={Paper} width="100%">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" >
                  Instructor Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Name
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              course.inst?.map((row) => (
                <TableRow
                  key={row.prereq}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      <Link to={'/instructor/' + row.id} >
                        {row.id}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textSecondary">
                      {row.name}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
      </Box>
    </>
  )
}


export default CourseInfo;