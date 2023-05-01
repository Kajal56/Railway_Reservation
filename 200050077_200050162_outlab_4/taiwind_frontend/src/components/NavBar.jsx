import React, {useState} from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import {NavLink, useNavigate} from 'react-router-dom' ;
import { useAuth } from '../contexts/AuthContext';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { logout } from './auth-api';

const Navbar = () => {
    const [isnav, setIsnav] = useState(false)
    const handleClick = () => setIsnav(!isnav)

    const handleClose =()=> setIsnav(!isnav)
    const navigate = useNavigate();
    const {
      authUser,
      setAuthUser,
      isLoggedIn,
      setIsLoggedIn,
      isAdmin,
      setIsAdmin
    } = useAuth();
    console.log("Is Admin  NavBar : " ,isAdmin)
    ///---------------UseContext ends 
    const  handleLogOut= async ()=>{
        const res = await logout();
        setIsLoggedIn(false) ;
        setAuthUser(null);
        console.log(res);
    }
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
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/user-info" smooth={true} offset={-100} duration={500}>About You</NavLink></li>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/contact-us" smooth={true} offset={-50} duration={500}>Contact Us</NavLink></li>
          <li><NavLink className = {isnav ? 'hidden' : isnav} to="/pnr" smooth={true} offset={-50} duration={500}>PNR Search</NavLink></li>
          <li><NavLink className = {(isnav || !isAdmin) ? 'hidden' : isnav} to="/admin-page" smooth={true} offset={-50} duration={500}>Admin</NavLink></li>
          </ul>
        </div>
        {!isLoggedIn ?
        <div className='hidden md:flex pr-4'>
          <button onClick={()=>{navigate('login')}} className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button> 
          <button onClick={()=>{navigate('register')}} className='px-8 py-3'>Sign Up</button>
        </div>
          :
        <div className='hidden md:flex pr-4'>
          <button onClick={()=>{handleLogOut()}} className='bg-slate-500 ml-3 px-8 py-3'>Log Out</button>
        </div>
        }           {/* } */}
        <div  onClick={handleClick}>
            {!isnav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!isnav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="home" smooth={true} duration={500}>Home</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="user-info" smooth={true} offset={-200} duration={500}>About You</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="about-us" smooth={true} offset={-50} duration={500}>About Us</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="pnr" smooth={true} offset={-100} duration={500}>PNR search</NavLink></li>
          <li className={!isAdmin ? 'hidden':'border-b-2 border-zinc-300 w-full'}><NavLink onClick={handleClose} to="pnr" smooth={true} offset={-100} duration={500}>PNR search</NavLink></li>

        {!isLoggedIn ?
        <div className='flex flex-col my-4'>
            <button onClick={()=>{navigate('login')}} className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button onClick={()=>{navigate('register')}} className='px-8 py-3'>Sign Up</button>
        </div>

        :
        <div>
            {/* <button  className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>LogOut</button> */}
            <button onClick={handleLogOut} className='bg-slate-600 text-indigo-600 px-8 py-3 mb-4'>LogOut</button>

        </div>
        }
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;