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
