// const baseUrl = "http://localhost:8080"

const login = async (user) => {
  console.log(user)
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  });
  const json = await response.json();
  return json
}

const check = async () => {
  const response = await fetch("/auth/has", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json
}

const logout = async () => {
  const response = await fetch("/auth/logout", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const userProfile = async () => {
  const response = await fetch("/auth/home", {
    method: "GET",
  });
  
  const json = await response.json();
  console.log(json)
  return json
}

const runningCourses = async () => {
  const response = await fetch("/auth/course/dept/running", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const runningCoursesDept = async (dept_name) => {
  const response = await fetch("/auth/course/running/" + dept_name, {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json
}

const getCoursesInfo = async (course_id) => {
  const response = await fetch("/auth/course/info/" + course_id, {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const getAllInstructors = async () => {
  const response = await fetch("/auth/allInstructor", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const getInstructor = async (id) => {
  const response = await fetch("/auth/instructor/" + id, {
    method: "GET",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const canRegister = async () => {
  const response = await fetch("/auth/registration/running", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json.courses)
  return json.courses 
}

const registerNow = async (courseId, secId) => {
  const response = await fetch("auth/course/reg/"+courseId+"/"+secId, {
    method: "POST",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

const deregisterNow = async (courseId) => {
  const response = await fetch("auth/course/dereg/"+courseId, {
    method: "POST",
  });
  const json = await response.json();
  console.log(json)
  return json 
}

// const signin = async (user) => {
//   const result = await axios.post("http://localhost:8080/auth/signin", user)
//   return result
// }


export {
  login,
  check,
  logout,
  userProfile,
  runningCourses,
  runningCoursesDept,
  getCoursesInfo, 
  getAllInstructors,
  getInstructor, 
  canRegister, 
  registerNow,
  deregisterNow
}