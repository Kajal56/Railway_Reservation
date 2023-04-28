import React from "react";
import { bookTicket, getBookings, searchTrain } from "./auth-api";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { CurrencyBangladeshiIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
//========================
// import React, { useState, useEffect } from "react"
import {
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

//-----------------

// function CourseInfo() {
export default function MyBookings() {
  //   const [bookings, setBookings] = useState({});
  //   const trains = [3,5,6,7] ;
  const [p_b, setPb] = useState([]);
  const [u_b, setUb] = useState([]);
  const navigate = useNavigate();

  const getMyBookings = async () => {
    try {
      const res = await getBookings();
      setPb(res.past_bookings);
      setUb(res.upcoming_bookings);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handlebook = async (tno, sp, dp, doj, j_class) => {
    localStorage.setItem("trainno", tno);
    localStorage.setItem("sp", sp);
    localStorage.setItem("dp", dp);
    localStorage.setItem("doj", doj);
    localStorage.setItem("j_class", j_class);
  };

  const handleCancel = async (tno, sp, dp, doj, j_class , pnr) => {
    console.log("Check 1");
    console.log(tno, sp, dp, doj, j_class , pnr, "handleCancel function")
    localStorage.setItem("c_trainno", tno);
    localStorage.setItem("c_sp", sp);
    localStorage.setItem("c_dp", dp);
    localStorage.setItem("c_doj", doj);
    localStorage.setItem("c_j_class", j_class);
    localStorage.setItem("c_pnr" , pnr) ;
    console.log("Check 2");
    navigate('/cancel-ticket') ;
    console.log("Check 3") ;

  };


  useEffect(() => {
    getMyBookings();
  }, []);
  //   return ;
  return (
    <div className="App">
      {/*Saperator */}
      <div>
        <h2>Upcoming bookings</h2>
        <tbody>
          <tr>
            <th>PNR</th>
            <th>class_sp</th>
            <th>class_dp</th>
            <th>doj</th>
            <th>class</th>
            <th>Train number</th>
            <th>Status</th>
            <th>Cancel Ticket</th>
          </tr>
          {p_b.map((item, index) => (
            // {trains.map((item, index) => (
            <tr
              class="bg-slate-300 border-b dark:border-neutral-500"
              key={index}
            >
              <td class="whitespace-nowrap px-6 py-4 ">{item.pnr}</td>
              <td class="whitespace-nowrap px-6 py-4 ">{item.sp}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.dp}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.doj}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.class}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.trainno}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.status}</td>
              <td>
                <button className={ (item.status =='CANCELLED') ? 'hidden' : 'inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'}
                  onClick={() => {
                    console.log("Heyyy, I'm clicked");
                    // console.log(
                    //   item.trainno,
                    //   item.sp,
                    //   item.dp,
                    //   item.doj,
                    //   item.class,
                    //   item.pnr
                    // );

                    handleCancel(
                      item.trainno,
                      item.sp,
                      item.dp,
                      item.doj,
                      item.class,
                      item.pnr
                    );
  
                  }}
                >
                  Cancel Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
      <hr />
      <hr />
      <div>
        <h2>Past Bookings</h2>
        <tbody>
          <tr>
            <th>PNR</th>
            <th>class_sp</th>
            <th>class_dp</th>
            <th>Date of journey</th>
            <th>Class</th>
            <th>Train number</th>
          </tr>
          {p_b.map((item, index) => (
            // {trains.map((item, index) => (
            <tr
              class="bg-slate-300 border-b dark:border-neutral-500"
              key={index}
            >
              <td class="whitespace-nowrap px-6 py-4 ">{item.pnr}</td>
              <td class="whitespace-nowrap px-6 py-4 ">{item.sp}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.dp}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.doj}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.class}</td>
              <td class="whitespace-nowrap px-6 py-4">{item.trainno}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );

  //-------------------Material UI
}
