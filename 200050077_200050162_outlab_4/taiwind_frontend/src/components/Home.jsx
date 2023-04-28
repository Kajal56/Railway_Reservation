import React, { useState } from 'react';
// import Select from 'react-select';
import SearchBox from './SearchBox';
import Navbar from './NavBar.jsx';
import Booking from './Booking';
export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="w-1/2 grid h-screen place-items-center">
        <SearchBox/>
        {/* <h1 className="text-blue-700">Hello</h1> */}
      </div>
   </div>
  );
}
