import React, { useState, useEffect } from "react"
import {
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Container
} from '@mui/material';
import { Link } from "react-router-dom";
import { getAllInstructors } from "./auth-api";


const AllInstructors = () => {

  const [instructors, setInstructors] = useState({});

  const getInstructors = async () => {
    try {
      const res = await getAllInstructors()
      setInstructors(res);
      console.log(res)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <>
      <h1>All Instructors</h1>
      <Container >
        <TableContainer component={Paper} >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" >
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Dept_Name
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              instructors.basic_info?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >
                    <Button variant="text" >
                      <Typography variant="h6">
                        <Link to={row.id} relative="/instructor" >
                          {row.id}
                        </Link>
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell >
                    <Typography variant="h6">
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell >
                    <Typography variant="h6">
                        {row.dept_name}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
      </Container>
    </>
  )
}

export default AllInstructors;