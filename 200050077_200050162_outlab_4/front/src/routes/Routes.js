import React, { useContext } from "react"
import { Routes, Route, Navigate, Redirect } from 'react-router-dom';
import Login from "../components1/Login"
import SignUp from "../components1/Signup";
import Home from "../components1/Home";
import Welcome from "../components1/Welcome";
import AuthApi from "../utils/AuthApi";
import RunningCourses from "../components1/RunningCourses";
import RunningCoursesDept from "../components1/RunningCoursesDept";
import CourseInfo from "../components1/CourseInfo";
import InstructorInfo from "../components1/InstructorInfo";
import AllInstructors from "../components1/AllInstructors";
import Registration from "../components1/Registration";

function RoutesPath() {
  const authApi = useContext(AuthApi)
  return authApi === null ? (
    <h1> Loading... </h1>
  ) : (
    authApi.auth ? (
      <Routes>
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route exact path="/home" element={
          authApi.auth = true ? (<Home/>) : <Navigate replace to={"/login"} />
          } />
        <Route exact path="/course/:course_id" element={
          authApi.auth = true ? (<CourseInfo />) : <Navigate replace to={"/login"} />
        } />
        <Route path='/course/running/:dept_name' element={
          authApi.auth = true ? (<RunningCoursesDept />) : <Navigate replace to={'/login'} />
        } />
        <Route exact path="/course/running" element={
          authApi.auth = true ? (<RunningCourses />) : <Navigate replace to={"/login"} />
        } />
        <Route exact path="/instructor" element={
          authApi.auth = true ? (<AllInstructors/>) : <Navigate replace to={"/login"} />
        } />
        <Route exact path="/instructor/:instructor_id" element={
          authApi.auth = true ? (<InstructorInfo />) : <Navigate replace to={"/login"} />
        } />
        <Route exact path="/registration" element={
          authApi.auth = true ? (<Registration />) : <Navigate replace to={"/login"} />
        } />
        <Route path="*" element={<Navigate replace to={"/home"} />
        }/>
      </Routes>
    ) : (
      <Routes>
        <Route path="/login" element={(<Login />)
        }>{console.log("hbsacjvbsackjb\n\n\"" + authApi.auth + "\n\nv dsjkbjkdfkjs")}</Route>
        <Route path="*" element={(<Login />)
        }>{console.log("hbsacjvbsackjb\n\n\"" + authApi.auth + "\n\nv dsjkbjkdfkjs")}</Route>
      </Routes>
    )
  )
}

export default RoutesPath