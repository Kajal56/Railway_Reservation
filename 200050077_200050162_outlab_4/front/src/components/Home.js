import React, { useContext, useState, useEffect } from "react"
import AuthApi from '../utils/AuthApi';
import { logout, userProfile } from "./auth-api";
import { deregisterNow } from "./auth-api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Button
} from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab'

function Home() {

  const authApi = useContext(AuthApi);
  const handleSignout = async (e) => {
    e.preventDefault();
    const res = await logout()
    authApi.setAuth(res.auth);

  };

  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const res = await userProfile()
      setProfile(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const [value, setValue] = useState("one");
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleDropCourse = async (e, c_id) => {
    // e.preventDefault();
    console.log("botton clicked")
    toast.success("button was clicked", {
      position: toast.POSITION.TOP_RIGHT
    })
    const res = await deregisterNow(c_id)
    if (res.dereg) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_LEFT
      });
    }
    await getProfile();
  }

  console.log(profile.user?.id)
  return (

    <>
      <div>
        <h1>Home</h1>
      </div>
      <Box width='700px' height='1000vh'>
        <Card height='100vh'>
          <CardContent>
            {
              profile.user?.map((row) => (
                <Grid container rowSpacing={1} columnSpacing={2}>
                  <Grid item xs="3">
                    <Typography varient='h5' align="center">
                      {row.id}
                    </Typography>
                  </Grid>
                  <Grid item xs="3" >
                    <Typography varient='h5' align="center">
                      {row.name}
                    </Typography>
                  </Grid>
                  <Grid item xs="3">
                    <Typography varient='h5' align="center">
                      {row.dept_name}
                    </Typography>
                  </Grid>
                  <Grid item xs="3">
                    <Typography varient='h5' align="center">
                      {row.tot_cred}
                    </Typography>
                  </Grid>
                </Grid>
              ))
            }

            {/* <Typography>
              maa chuda
            </Typography> */}
            {/* <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ flexGrow: 1 }}>
                <DataGrid {...profile.curr_courses} />
              </div>
            </div> */}
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
                            grade
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            section Id
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            Semester
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            year
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        profile.curr_courses?.map((row) => (
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
                                {row.grade}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.sec_id}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.semester}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.year}
                              </Typography>
                            </TableCell>
                            <TableCell >
                              <Button variant="contained" onClick={(e) => handleDropCourse(e, row.course_id)}>
                                <Typography variant="h6">
                                  Drop
                                </Typography>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </TableContainer>
                </TabPanel>
                <TabPanel value="two" >
                  {/* <TableContainer component={Paper}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant="h5" >
                            course_id
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            grade
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            section Id
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            Semester
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" >
                            year
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        profile.prev_courses?.map((row) => (
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
                                {row.grade}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.sec_id}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.semester}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="textSecondary">
                                {row.year}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </TableContainer> */}
                  <Box>
                    {
                      profile.prev?.map((pre) => (
                        <Box sx={{ mt: 4 }}>
                          <Typography variant="h5">{pre.semester +"         "+pre.year}</Typography>
                        <TableContainer component={Paper} >
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <Typography variant="h5" >
                                  course_id
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="h5" >
                                  grade
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="h5" >
                                  section Id
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="h5" >
                                  Semester
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="h5" >
                                  year
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {
                              pre?.courses.map((row) => (
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
                                      {row.grade}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant="h6" color="textSecondary">
                                      {row.sec_id}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant="h6" color="textSecondary">
                                      {row.semester}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant="h6" color="textSecondary">
                                      {row.year}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              ))
                            }
                          </TableBody>
                        </TableContainer>
                        </Box>
                      ))
                    }
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
            {/* <Tabs value={value} onChange={handleChange}>
              <Tab label="Tab 1">
                <p>Content for Tab 1</p>
              </Tab>
              <Tab label="Tab 2">
                <p>Content for Tab 2</p>
              </Tab>
              <Tab label="Tab 3">
                <p>Content for Tab 3</p>
              </Tab>
            </Tabs> */}
            {/* <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Current Courses">
                <p>One is here</p>
                <Typography variant="body2" color='textSecondary'>
                  Mai hu gatoaktah, mai duniya me sabse pyara.
                </Typography>
              </Tab>
              <Tab value="two" label="Previous Courses">
                <p>two is here</p>
                <Typography variant="body2" color='textSecondary'>
                  Mai hu gatoaktah, mai duniya me sabse pyara.
                </Typography>
              </Tab>
            </Tabs> */}
            {/* <Typography varint='body2' >
              React
            </Typography>
            <Typography variant="body2" color='textSecondary'>
              Mai hu gatoaktah, mai duniya me sabse pyara.
            </Typography>
            <Typography variant="body2" color='textSecondary'>
              Mai hu gatoaktah, mai duniya me sabse pyara.
            </Typography> */}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default Home



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Home() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Home;