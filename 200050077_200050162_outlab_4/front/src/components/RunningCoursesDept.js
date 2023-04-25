import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom'
import { runningCoursesDept } from "./auth-api";
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from '@mui/material';


const RunningCoursesDept = () => {
  const [deptCourses, setDeptCourses] = useState(null)
  const { dept_name } = useParams()

  const getDeptRunning = async (dept_name) => {
    try {
      const res = await runningCoursesDept(dept_name)
      setDeptCourses(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  React.useEffect(() => {
    getDeptRunning(dept_name)
  }, [dept_name])

  return (
    <>
      <h1>
        {dept_name}
      </h1>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5" >
                Course_id
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            deptCourses?.course.map((row) => (
              <TableRow
                key={row.course_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                  <Button variant="text" >
                    <Typography variant="h6">
                      <Link to={'/course/' + row.course_id} >
                        {row.course_id}
                      </Link>
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </TableContainer>
    </>
  )
}

export default RunningCoursesDept;