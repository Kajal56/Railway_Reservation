import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './auth-api';
 export default function Register () {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [problem, setProblem] = useState(false) ;
  const [message , setMessage] = useState("");
  const  navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // res = login({})
    let user = {};
    user.emailid = emailid;
    user.password = password ;
    user.dob = dob;
    user.mobileno = mobileno ;
    const res = await register(user);
    console.log(res);
    if(res.success){
        navigate('/login');
    } else{
        
        setProblem(true) ;
        setMessage(res.message);
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="email"
            id="email"
            name="email"
            value={emailid}
            onChange={event => setEmailid(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="password">Password</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="dob">Date of Birth</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={event => setDob(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="phone">Phone Number</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="tel"
            id="phone"
            name="phone"
            value={mobileno}
            onChange={event => setMobileno(event.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          type="submit"
        >
          Register
        </button>
      </form>
      {
        problem ?
        <div>{message}</div>
        :
        <div></div>

    }
    </div>
  );
}
