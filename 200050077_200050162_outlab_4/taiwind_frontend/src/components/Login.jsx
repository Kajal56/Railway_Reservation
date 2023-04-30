import React, { useState } from 'react';
import { login } from './auth-api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [problem, setProblem] = useState(false) ;
  const  navigate = useNavigate();
//-------useContext -----------
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth();
//--------------useConext ends -----------

  const handleSubmit = async (event) => {
    event.preventDefault();
    // res = login({})
    let user = {};
    user.emailid = emailid;
    user.password = password ;
    const res = await login(user);
    console.log(res);
    if(res.auth){
      setIsLoggedIn(true);
        navigate('/');
    } else{
        setProblem(true) ;
    }
  };

  return (
    <div className="border-2 border-gray-200 p-4 rounded-md w-96 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            id="email"
            type="text"
            placeholder="Email"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="register">
            Don't have account ?
          </a>
        </div>
      </form>
    </div>
  );
}



// import React, { useState } from 'react';
// import { login } from './auth-api';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// export default function Login() {
//   const [emailid, setEmailid] = useState('');
//   const [password, setPassword] = useState('');
//   const [problem, setProblem] = useState(false) ;
//   const  navigate = useNavigate();
// //-------useContext -----------
//   const {
//     authUser,
//     setAuthUser,
//     isLoggedIn,
//     setIsLoggedIn
//   } = useAuth();
// //--------------useConext ends -----------

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // res = login({})
//     let user = {};
//     user.emailid = emailid;
//     user.password = password ;
//     const res = await login(user);
//     console.log(res);
//     if(res.auth){
//       setIsLoggedIn(true);
//         navigate('/');
//     } else{
//         setProblem(true) ;
//     }
//   };

//   return (
//     <div class="border-2 border-gray-200 p-4 rounded-md w-96 mx-auto">
//   <form>
//     <div class="mb-4">
//       <label class="block text-gray-700 font-bold mb-2" for="email">
//         Email
//       </label>
//       <input class="border rounded-md py-2 px-3 w-full" id="email" type="text" placeholder="Email">
//     </div>
//     <div class="mb-6">
//       <label class="block text-gray-700 font-bold mb-2" for="password">
//         Password
//       </label>
//       <input class="border rounded-md py-2 px-3 w-full" id="password" type="password" placeholder="Password">
//     </div>
//     <div class="flex items-center justify-between">
//       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//         Sign In
//       </button>
//       <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//         Forgot Password?
//       </a>
//     </div>
//   </form>
// </div>

//   )
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//       <h2 className="text-2xl font-bold mb-6">Login</h2>
//       <form method='POST' onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block font-semibold mb-2" htmlFor="emailid">Emailid</label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="text"
//             id="emailid"
//             name="emailid"
//             value={emailid}
//             onChange={event => setEmailid(event.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-semibold mb-2" htmlFor="password">Password</label>
//           <input
//             className="w-full border border-gray-300 p-2 rounded-md"
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={event => setPassword(event.target.value)}
//             required
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//           type="submit"
//         >
//           Login
//         </button>
//       </form>

//       {
//         problem ?
//         <div>Try Again Please</div>
//         :
//         <div></div>
//       }
//     </div>
//   );
// }
