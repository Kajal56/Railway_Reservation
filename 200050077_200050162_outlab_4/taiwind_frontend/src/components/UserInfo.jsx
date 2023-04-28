import { useState, useEffect } from 'react';
import { login, register, userInfo } from '../components/auth-api';


export default function Login() {
  const [info, setInfo] = useState([]);
  // const []
  useEffect(() => {
    async function fetchData() {
      let user1 = {
        emailid: "abcd@xyz.com", 
        password: "abcd", 
        mobileno: "9090909009",
        dob: "21-02-2002"
      };
      let user = {
        emailid: "abcd@xyz.com", 
        password: "abcd", 
      };
      const d1 = await register(user1);
      console.log("d1");
      console.log(d1);
      const d2 = await login(user);
      console.log("d2");
      console.log(d2);
      const data = await userInfo();
      setInfo(data);
      console.log(info[0]);
    }
    fetchData();
  }, []);


  
  if(!info.auth){
    return (
      <div>
        {/* Bye, {info[0].emailid} */}
      </div>
    );
  }
  return (
    <div>
      {/* Hi, {info.message} */}
    </div>
  );

  
}