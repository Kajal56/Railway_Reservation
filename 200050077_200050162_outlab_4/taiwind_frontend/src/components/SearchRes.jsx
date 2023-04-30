import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchTrain } from "./auth-api";

export default function SearchRes(props) {
  const [trains, setTrains] = useState([]);
  let train = {};
  train.f_sp = props.f_sp;
  train.f_dp = props.f_dp;
  train.f_class = props.f_class;
  train.f_doj = props.f_doj;

  const navigate = useNavigate();
  const f_trains = async (train) => {
    try {
      setTrains([]);
      const res = await searchTrain(train);
      setTrains(res);
      console.log(res);
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
    navigate("/booking");
  };

  useEffect(() => {
    f_trains(train);
  }, []);

  return (
    <div className="App">
{/*  Saperator ------------------------------------------------ */}


  <table class="w-[1250px] whitespace-no-wrap">
        <thead>
          <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
            <th class="px-4 py-3">Train Number</th>
            <th class="px-4 py-3">Date of Journey</th>
            <th class="px-4 py-3">Source</th>
            <th class="px-4 py-3">Destination</th>
            <th class="px-4 py-3">Class</th>
            <th class="px-4 py-3">Seats Left</th>
            <th class="px-4 py-3">BookTicket</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y">
          {trains.map((item, index) => (
            <tr class="text-gray-700">
              <td class="px-4 py-3">{item.tname}</td>
              <td class="px-4 py-3">{item.doj}</td>
              <td class="px-4 py-3">{item.classseats_sp}</td>
              <td class="px-4 py-3">{item.classseats_dp}</td>
              <td class="px-4 py-3">{item.class}</td>
              <td class="px-4 py-3">{item.seatsleft}</td>
              <td>
                <button
                  className={ "inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  }
                  onClick={() => {
                  handlebook(
                    item.trainno,
                    item.classseats_sp,
                    item.classseats_dp,
                    item.doj,
                    item.class
                  );
                }}
                >
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{/**----------------------------------------------------------------------Saperator------------------------------------------- */}
      <tbody>
        <tr>
          <th>BookTicket</th>
          <th>tname</th>
          <th>Date of Journeu</th>
          <th>class_sp</th>
          <th>class_dp</th>
          <th>class</th>
          <th>Seats Left</th>
        </tr>
        {trains.map((item, index) => (
          <tr class="" key={index}>
            <td>
              <button
                className=""
                onClick={() => {
                  handlebook(
                    item.trainno,
                    item.classseats_sp,
                    item.classseats_dp,
                    item.doj,
                    item.class
                  );
                }}
              >
                Book
              </button>
            </td>
            <td class="whitespace-nowrap px-6 py-4 ">{item.tname}</td>
            <td class="whitespace-nowrap px-6 py-4 ">{item.doj}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.classseats_sp}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.classseats_dp}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.class}</td>
            <td class="whitespace-nowrap px-6 py-4">{item.seatsleft}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );

}
