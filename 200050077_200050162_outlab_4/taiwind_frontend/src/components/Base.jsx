import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Booking from "./Booking";
import MyBookings from "./MyBookings";
import Cancelling from "./CancelTicket";
import UserInfo from "./UserInfo";
import Login from "./Login";
import Register from "./Registration";
import { useAuth } from '../contexts/AuthContext';
import PnrSearch from './Pnr'
import Navbar from './NavBar';
function Base() {


    const {
        isLoggedIn,
      } = useAuth();
    return  (
        isLoggedIn ? (
          <Routes>
            <Route path ='/' element= {<Home/>}></Route>
            <Route path ='/user-info' element= {<UserInfo/>}></Route>
            <Route path ='/booking' element= {<Booking/>}></Route>
            <Route path ='/my-bookings' element= {<MyBookings/>}></Route>
            <Route path ='/cancel-ticket' element= {<Cancelling/>}></Route>
            <Route path ='/home' element= {<Home/>}></Route>
            <Route path ='/login' element= {<Login/>}></Route>
            <Route path ='/register' element= {<Register/>}></Route>
            <Route path ='/pnr' element= {<PnrSearch/>} ></Route>

          </Routes>
        ) : (
            <Routes>
            <Route path ='/' element= {<Home/>}></Route>
            <Route path ='/user-info' element= {<Login/>}></Route>
            <Route path ='/booking' element= {<Login/>}></Route>
            <Route path ='/my-bookings' element= {<Login/>}></Route>
            <Route path ='/cancel-ticket' element= {<Login/>}></Route>
            <Route path ='/home' element= {<Home/>}></Route>
            <Route path ='/login' element= {<Login/>}></Route>
            <Route path ='/register' element= {<Register/>}></Route>
            <Route path ='/pnr' element= {<PnrSearch/>} ></Route>

          </Routes>
        )
      )

}

export default Base;
    // return (
    //   <Routes>
    //     <Route path ='/' element= {<Home/>}></Route>
    //     <Route path ='/user-info' element= {<UserInfo/>}></Route>
    //     <Route path ='/booking' element= {<Booking/>}></Route>
    //     <Route path ='/my-bookings' element= {<MyBookings/>}></Route>
    //     <Route path ='/cancel-ticket' element= {<Cancelling/>}></Route>
    //     <Route path ='/home' element= {<Home/>}></Route>
    //     <Route path ='/login' element= {<Login/>}></Route>
    //     <Route path ='/register' element= {<Register/>}>
    //       <Route path=':in_pnr' element={<PnrDetails/>}></Route>
    //     </Route>
    //     <Route path ='/searches' element= {<Searches/>}></Route>
    //   </Routes>


    // )
