import React, { useState, useEffect } from "react"
import {
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button
} from '@mui/material';
import { runningCourses } from "./auth-api";
import { Link } from "react-router-dom";


const RunningCourses = () => {
  
  const [dept, setDept] = useState({});

  const getDept = async () => {
    try {
      const res = await runningCourses()
      setDept(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDept();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5" >
                Dept_Name
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dept.dept_name?.map((row) => (
              <TableRow
                key={row.course_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                  <Button variant="text" >
                    <Typography variant="h6">
                        <Link to={row.dept_name} relative="/course/running" >
                          {row.dept_name}
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

export default RunningCourses;