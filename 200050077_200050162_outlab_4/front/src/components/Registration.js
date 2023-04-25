import React, { useState, useEffect } from "react"
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
  Container,
  FormControl,
  NativeSelect,
  TextField
} from '@mui/material';
import { canRegister } from "./auth-api";
import { registerNow } from "./auth-api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {

  const [running, setRunning] = useState([]);

  const getRunningCourses = async () => {
    try {
      const res = await canRegister()
      setRunning(res);
      console.log(res)
    } catch (err) {
      console.error(err.message);
    }
  };

  // const [dataSource, setDataSource] = useState([])
  const [tableFilter, setTableFilter] = useState([])

  const [value, setValue] = useState("")

  const filterChange = (e) => {
    if (running) {
      // console.log(running.courses)
      if (e.target.value !== "") {
        setValue(e.target.value)
        // console.log(e.target.value)
        // console.log(value)
        const filtered = running.filter(item =>
          item.course_id.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setTableFilter(filtered)
        // console.log([tableFilter])
        // console.log("abcjbakcbks" + tableFilter.course_id)
        // const filterTable = running.courses.filter(
        //   o => Object
        //     .keys(o)
        //     .some(k => String(o[k])
        //       .toLowerCase()
        //       .includes(o.target.value.toLowerCase())
        //     ))
        // .setTableFilter([...filterTable])
        // // console.log("ancjkbjkvbkad"+ filterTable)
        // setTableFilter(filterTable)
      } else {
        setValue(e.target.value)

      }
    }
  }

  useEffect(() => {
    getRunningCourses();
  }, []);

  const handleSelectChange = (e, courseId) => {
    const change = running.map(row => {
      if (row.course_id === courseId) {
        return {
          ...row,
          curr_sec: e.target.value
        }
      } else {
        return row
      }
    })

    setRunning(change)
    setTableFilter(change)
  }

  const handleReg = async (e, courseId, secId) => {
    e.preventDefault();
    console.log({courseId, secId, secId})
    const res = await registerNow(courseId, secId)
    if (res.registration) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.warning(res.message, {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }


  // useEffect(() => {

  // }, [value, running])

  return (
    <>
      <h1>Registration</h1>
      <Container>
        <TextField
          margin="normal"
          required
          fullWidth
          id="search"
          label="search"
          name="search"
          // autoComplete="id"
          autoFocus
          style={{ fontSize: 100 }}
          onChange={filterChange}
        />
        <ToastContainer/>
        <TableContainer component={Paper} >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" >
                  Course Code
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Course Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Section
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" >
                  Register
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              value?.length > 0 ?
                tableFilter.map((row) => (
                  <TableRow
                    key={row.course_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell >
                      <Typography variant="h6">
                        {row.course_id}
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="h6">
                        {row.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Section
                      </InputLabel> */}
                        {/* <Select
                          // defaultValue={1}
                          id={row.course_id}
                          value={row.curr_sec}
                          label={row.course_id}
                          onChange={(e) => handleSelectChange(e, row.course_id)}
                        >{row.sec.map((key) =>
                          <MenuItem value={key.sec_id}><Typography variant='h6'>{Object.values(key)[0]}</Typography></MenuItem>
                        )}
                          <MenuItem value={0}><Typography variant='h6'>0</Typography></MenuItem>
                        </Select> */}
                        <FormControl fullWidth>
                          <NativeSelect
                            value={row.curr_sec}
                            onChange={(e) => handleSelectChange(e, row.course_id)}
                          >{row.sec.map((key) =>
                            <option value={key.sec_id}><Typography variant='h3'>{Object.values(key)[0]}</Typography></option>
                          )}
                          </NativeSelect>
                        </FormControl>
                      </FormControl>
                    </TableCell>
                    <TableCell >
                      <Button variant="contained" onClick={(e) => handleReg(e, row.course_id, row.curr_sec)}>
                        <Typography variant="h6">
                          Register
                        </Typography>
                      </Button>
                    </TableCell>
                  </TableRow>
                )) :
                running.map((row) => (
                  <TableRow
                    key={row.course_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell >
                      <Typography variant="h6">
                        {row.course_id}
                      </Typography>
                    </TableCell>
                    <TableCell >
                      <Typography variant="h6">
                        {row.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <NativeSelect
                          value={row.curr_sec}
                          onChange={(e) => handleSelectChange(e, row.course_id)}
                        >{row.sec.map((key) =>
                          <option value={key.sec_id}><Typography variant='h3'>{Object.values(key)[0]}</Typography></option>
                        )}
                        </NativeSelect>
                      </FormControl>
                    </TableCell>
                    <TableCell >
                      <Button variant="contained" onClick={(e) => handleReg(e, row.course_id, row.curr_sec)} >
                        <Typography variant="h6">
                          Register
                        </Typography>
                      </Button>
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

export default Registration;