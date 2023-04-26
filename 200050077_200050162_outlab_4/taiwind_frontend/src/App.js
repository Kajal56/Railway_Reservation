
import Navbar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Pnr from './components/Pnr';
import Searches from './components/Searches' ;
import PnrDetails from './components/PnrDetails' ;
function App() {

    return (
      <Routes>
        <Route path ='/' element= {<Home/>}></Route>
        <Route path ='/home' element= {<Home/>}></Route>
        <Route path ='/pnr' element= {<Pnr/>}>
          <Route path=':in_pnr' element={<PnrDetails/>}></Route>
        </Route>
        <Route path ='/searches' element= {<Searches/>}></Route>
      </Routes>
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
