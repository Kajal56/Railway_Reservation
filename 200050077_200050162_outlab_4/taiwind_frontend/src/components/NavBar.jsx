import React, {useState} from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import {NavLink} from 'react-router-dom' ;

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isnav, setIsnav] = useState(false)
    const handleClick = () => setIsnav(!isnav)

    const handleClose =()=> setIsnav(!isnav)

  return (
    <nav>
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <NavLink to='/home'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Railway</h1>
          </NavLink>
          <ul className={'hidden md:flex'}>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/my-bookings" smooth={true} offset={-200} duration={500}>My bookings</NavLink></li>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/refund-history" smooth={true} offset={-100} duration={500}>Refund History</NavLink></li>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/support" smooth={true} offset={-50} duration={500}>Support</NavLink></li>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/pnr" smooth={true} offset={-50} duration={500}>Pnr</NavLink></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div  onClick={handleClick}>
            {!isnav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!isnav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="home" smooth={true} duration={500}>Home</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</NavLink></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;