import React, { useState } from 'react';
import { login } from './auth-api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [problem, setProblem] = useState(false) ;
  const  navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // res = login({})
    let user = {};
    user.emailid = emailid;
    user.password = password ;
    const res = await login(user);
    console.log(res);
    if(res.auth){
        navigate('/');
    } else{
        setProblem(true) ;
        // SpetErr()
    }

    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ emailid, password })
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  };
//   return (
//     // <div>Helllo</div>
//   )
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="emailid">Emailid</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="text"
            id="emailid"
            name="emailid"
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
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>

      {
        problem ?
        <div>Try Again Please</div>
        :
        <div></div>
      }
    </div>
  );
}
