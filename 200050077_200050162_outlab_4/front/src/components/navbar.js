// import React from 'react'

// export default function Navbar() {
//   return (
//     <nav className="bg-white p-2 flex justify-between">
//       <a href="/" className="font-bold text-gray-700 text-2xl"> Railway booking </a>
//       <div>
//         <div className="flex">
//           <button
//             className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
//           >
//             Sign in
//           </button>
//           <button className="border p-1 px-4 rounded">Sign up</button>
//         </div>
//       </div>
//     </nav>
//   )
// }

import React, { useState, useEffect } from 'react';
import { getRefunds } from '../components1/auth-api';


export default function Refunds() {
  const [refunds, setRefunds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getRefunds();
      setRefunds(data);
      console.log(typeof(refunds));
    }
    fetchData();
  }, []);

  if(!refunds.auth){
    return (
      <div>
        Bye, {refunds.message}
      </div>
    );
  }
  return (
    <div>
      Hi, {refunds.message}
    </div>
  );
  
}