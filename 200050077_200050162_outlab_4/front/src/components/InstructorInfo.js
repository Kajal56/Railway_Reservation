import React, { useContext, useState, useEffect } from "react"
import AuthApi from '../utils/AuthApi';
import { getInstructor } from "./auth-api";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Tab,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
} from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Link, useParams } from "react-router-dom";

function InstructorInfo() {

  const authApi = useContext(AuthApi);
  const [profile, setProfile] = useState({});
  const { instructor_id } = useParams()

  const getProfile = async (instructor_id) => {
    try {
      const res = await getInstructor(instructor_id)
      setProfile(res);
      console.log(res)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile(instructor_id);
  }, [instructor_id]);

  const [value, setValue] = useState("one");
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (

    <>
      <div>
        <h1>Insturtor info</h1>
      </div>
      <Box width='700px' height='1000vh'>
        <Card height='100vh'>
          <CardContent>
            {
              profile.user?.map((row) => (
                <Grid container rowSpacing={1} columnSpacing={2}>
                  <Grid item xs="6">
                    <Typography varient='h5' align="center">
                      {row.name}
                    </Typography>
                  </Grid>
                  <Grid item xs="6">
                    <Typography varient='h5' align="center">
                      {row.dept_name}
                    </Typography>
                  </Grid>
                </Grid>
              ))
            }
            <Box>
              <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    aria-label="Tabs"
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor='secondary'
                  >
                    <Tab label={(<Typography variant="h6">Curr Courses</Typography>)} value="one" ></Tab>
                    <Tab label={(<Typography variant="h6">Prev Courses</Typography>)} value="two" ></Tab>
                  </TabList>
                </Box>
                <TabPanel value="one" >
                  <TableContainer component={Paper}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant="h5" >
                            course_id
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            Title
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        profile.curr_teaches?.map((row) => (
                          <TableRow
                            key={row.course_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell xs="6">
                              <Typography variant="h6" color="textSecondary">
                                <Link to={'/course/' + row.course_id}>
                                  {row.course_id}
                                </Link>
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.title}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </TableContainer>
                </TabPanel>
                <TabPanel value="two" >
                  <TableContainer component={Paper}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant="h5" >
                            Course_id
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            Title
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        profile.prev_teaches?.map((row) => (
                          <TableRow
                            key={row.course_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                <Link to={'/course/' + row.course_id}>
                                  {row.course_id}
                                </Link>
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.title}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default InstructorInfo
