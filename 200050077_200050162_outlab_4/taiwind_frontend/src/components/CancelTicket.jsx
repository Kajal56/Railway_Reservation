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
      const result = await searchPnr(cancelling_dict) ;
      setUpdatedTic(result) ;
    //   setBookingDetails(res) ;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
              Your Selection
            </h3>
            <div class="w-full overflow-x-auto">
              <table class="w-full whitespace-no-wrap">
                <thead>
                  <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                    <th class="px-4 py-3">Source </th>
                    <th class="px-4 py-3">{cancelling_dict.sp}</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y">
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Destination</td>
                    <td class="px-4 py-3">{cancelling_dict.dp}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Date of Journey</td>
                    <td class="px-4 py-3">{cancelling_dict.doj}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Class</td>
                    <td class="px-4 py-3">{cancelling_dict.j_class}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Train Number</td>
                    <td class="px-4 py-3">{cancelling_dict.trainno}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-6 flex justify-end">
              <button
                onClick={cancel}
                class={isCancelled ? "hidden":"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }
              >
                Cancel Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        <div className={!isCancelled ? "hidden" : "absolute bg-zinc-200 px-8"}>
          <div class="mt-8 pb-2 mr-8">
            <div class="mb-2 text-lg font-medium text-gray-900">
              Your PNR is
            </div>
            <div class="mb-4 text-xl font-bold text-indigo-600">
              {updatedTic.pnr}
            </div>

            <div class="mb-2 text-lg font-medium text-gray-900">
              And ticket status is
            </div>
            <div class="text-xl font-bold text-green-600">
              {updatedTic.status}
            </div>
          </div>
        </div>
      }
    </div>
  );
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
