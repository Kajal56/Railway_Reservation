import React, { useContext, useState } from 'react';
// import Select from 'react-select';
import SearchBox from './SearchBox';
import Navbar from './NavBar.jsx';
import Booking from './Booking';
import AuthApi from '../utils/AuthApi';
export default function Home() {
  return (
     <div>
          <div className="w-2/3 mx-auto">
            {/* <div> */}
            <SearchBox/>
          </div>
      </div>
     
  );
}
