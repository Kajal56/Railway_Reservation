
import Navbar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Pnr from './components/Pnr';
import Searches from './components/Searches' ;
import PnrDetails from './components/PnrDetails' ;
import Booking from "./components/Booking";
import MyBookings from "./components/MyBookings";
import Cancelling from "./components/CancelTicket";
import UserInfo from "./components/UserInfo";
import Login from "./components/Login";
import Register from "./components/Registration";
import AuthApi from "./utils/AuthApi";
import { AuthProvider } from "./contexts/AuthContext";
import DashBoard from "./components/DashBoard";
function App() {

    return (
      <AuthProvider>
      {/* <Routes>
        <Route path ='/' element= {<Home/>}></Route>
        <Route path ='/user-info' element= {<UserInfo/>}></Route>
        <Route path ='/booking' element= {<Booking/>}></Route>
        <Route path ='/my-bookings' element= {<MyBookings/>}></Route>
        <Route path ='/cancel-ticket' element= {<Cancelling/>}></Route>
        <Route path ='/home' element= {<Home/>}></Route>
        <Route path ='/login' element= {<Login/>}></Route>
        <Route path ='/register' element= {<Register/>}>
          <Route path=':in_pnr' element={<PnrDetails/>}></Route>
        </Route>
        <Route path ='/searches' element= {<Searches/>}></Route>
      </Routes> */}

      <Routes>
        <Route path ='/' element= {<Home/>}></Route>
        <Route path ='/user-info' element= {<UserInfo/>}></Route>
        <Route path ='/booking' element= {<Booking/>}></Route>
        <Route path ='/my-bookings' element= {<MyBookings/>}></Route>
        <Route path ='/cancel-ticket' element= {<Cancelling/>}></Route>
        <Route path ='/home' element= {<Home/>}></Route>
        <Route path ='/login' element= {<Login/>}></Route>
        <Route path ='/register' element= {<Register/>}>
          <Route path=':in_pnr' element={<PnrDetails/>}></Route>
        </Route>
        <Route path ='/searches' element= {<Searches/>}></Route>
      </Routes>
      {/* <Navbar/> */}
      {/* <DashBoard></DashBoard> */}
      </AuthProvider>
    )


  // return (
  //   <div>
  //     <div>
  //       <Navbar/>
  //     </div>
  //     <div className="grid h-screen place-items-center">
  //       <SearchBox/>
  //       {/* <h1 className="text-blue-700">Hello</h1> */}
  //     </div>
  //   </div>
  // );
}

export default App;
