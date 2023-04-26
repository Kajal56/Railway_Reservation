import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
    // const [nav, setNav] = useState(false)
    // const handleClick = () => setNav(!nav)

    // const handleClose =()=> setNav(!nav)
    const [location, setLocation] = useState("");

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
    <div className="text-center mt-10">
      <h1 className="text-white text-5xl font-bold mb-2">
        Find your table for any occasion
      </h1>
      {/* SEARCH BAR */}
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
          
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white" 
        onClick={()=>{
          return;
          // if(location == "banana") return;
          // router.push("/search");  //Got to see routing
        }
        }>
          Let's go
        </button>
      </div>
      {/* SEARCH BAR */}
    </div>
  </div>


  );
};

export default Header;