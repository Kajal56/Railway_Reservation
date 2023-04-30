import { Button } from "@mui/base";
import React, { useState } from "react";
import { bookTicket } from "./auth-api";
export default function Booking() {
  let booking_dict = {};
  const [bookingDetails, setBookingDetails] = useState({});
  const [isBooked, setIsBooked] = useState(false);
  booking_dict.dp = localStorage.getItem("dp");
  booking_dict.sp = localStorage.getItem("sp");
  booking_dict.doj = localStorage.getItem("doj");
  booking_dict.trainno = localStorage.getItem("trainno");
  booking_dict.j_class = localStorage.getItem("j_class");

  const book = async () => {
    try {
      //   setTrains([]);
      const res = await bookTicket(booking_dict);
      //   setTrains(res);
      console.log(res);
      setIsBooked(true);
      setBookingDetails(res);
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
                    <th class="px-4 py-3">{booking_dict.sp}</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y">
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Destination</td>
                    <td class="px-4 py-3">{booking_dict.dp}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Date of Journey</td>
                    <td class="px-4 py-3">{booking_dict.doj}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Class</td>
                    <td class="px-4 py-3">{booking_dict.j_class}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Train Number</td>
                    <td class="px-4 py-3">{booking_dict.trainno}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-6 flex justify-end">
              <button
                onClick={book}
                class={
                  isBooked
                    ? "hidden"
                    : "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }
              >
                Confirm Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        <div className={!isBooked ? "hidden" : "absolute bg-zinc-200 px-8"}>
          <div class="mt-8 pb-2 mr-8">
            <div class="mb-2 text-lg font-medium text-gray-900">
              Your PNR is
            </div>
            <div class="mb-4 text-xl font-bold text-indigo-600">
              {bookingDetails.pnr}
            </div>

            <div class="mb-2 text-lg font-medium text-gray-900">
              And ticket status is
            </div>
            <div class="text-xl font-bold text-green-600">
              {bookingDetails.status}
            </div>
          </div>
        </div>
      }
    </div>
  );
  //The below return is just for "recoverability-purposes"
  return (
    <div className="justify-center">
      <h1>
        Following are the details for your booking, please pay and confirm
        confirm booking.
      </h1>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <strong>source</strong>
          </div>
          <div>{booking_dict.sp}</div>
          <div>
            <strong>Destination </strong>
          </div>
          <div>{booking_dict.dp}</div>
          <div>
            <strong>Date of Journey</strong>
          </div>
          <div>{booking_dict.doj}</div>
          <div>
            <strong>Class </strong>
          </div>
          <div>{booking_dict.j_class}</div>
          <div>
            <strong>Train number </strong>
          </div>
          <div>{booking_dict.trainno}</div>
        </div>
      </div>
      <button
        onClick={book}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book This
      </button>
      <h5 className={!isBooked ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        Booked
      </h5>
      {
        <div
          className={!isBooked ? "hidden" : "absolute bg-zinc-200 w-full px-8"}
        >
          <h4>Your PNR is {bookingDetails.pnr}</h4>
          <h4>And ticket status is {bookingDetails.status}</h4>
        </div>
      }
    </div>
  );
}
