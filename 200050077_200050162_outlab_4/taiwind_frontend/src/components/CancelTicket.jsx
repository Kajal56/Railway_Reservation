import { Button } from "@mui/base";
import React, { useState } from "react";
import { bookTicket, cancelTicket, searchPnr } from "./auth-api";
export default function Cancelling() {
  let cancelling_dict ={} ;
  const [bookingDetails, setBookingDetails] = useState({});
  const [isCancelled , setIsCancelled] = useState(false) ;
  cancelling_dict.dp = localStorage.getItem("dp");
  cancelling_dict.sp = localStorage.getItem("sp");
  cancelling_dict.doj = localStorage.getItem("doj");
  cancelling_dict.trainno = localStorage.getItem("trainno");
  cancelling_dict.j_class = localStorage.getItem("c_j_class");
  cancelling_dict.pnr = localStorage.getItem("c_pnr") ;
  const [updatedTic, setUpdatedTic] = useState({}) ;

  const cancel = async () => {
    try {
    //   setTrains([]);
      const res = await cancelTicket(cancelling_dict);
    //   setTrains(res);
      console.log(res);
      setIsCancelled(true) ;
      const result = searchPnr(cancelling_dict) ;
      setUpdatedTic(res) ;
    //   setBookingDetails(res) ;
    } catch (err) {
      console.log(err.message);
    }
  };

//   return (
//     <div>
//     Hiii
//     </div>
//   );
  return (
    <div className="justify-center">
      {/* <h1>
        Following are the details for your booking, please pay and confirm
        confirm booking.
      </h1> */}
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <strong>source</strong>
          </div>
          <div>{cancelling_dict.sp}</div>
          <div>
            <strong>Destination </strong>
          </div>
          <div>{cancelling_dict.dp}</div>
          <div>
            <strong>Date of Journey</strong>
          </div>
          <div>{cancelling_dict.doj}</div>
          <div>
            <strong>Class </strong>
          </div>
          <div>{cancelling_dict.j_class}</div>
          <div>
            <strong>Train number </strong>
          </div>
          <div>{cancelling_dict.trainno}</div>
        </div>
      </div>
      <button onClick={cancel} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Cancel ticket
      </button>
      <h5 className={!isCancelled ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>Cancelled</h5>
      {
        <div className={!isCancelled ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <h4>Your PNR is {cancelling_dict.pnr}</h4>
            <h4>And ticket status is {updatedTic.status}</h4>

        </div>

      }
        
    </div>
  );
}
