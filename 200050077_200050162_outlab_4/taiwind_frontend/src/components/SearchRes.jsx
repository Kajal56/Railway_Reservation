import React from "react";
import { searchTrain } from "./auth-api";
import { useState } from "react";
import { CurrencyBangladeshiIcon } from "@heroicons/react/outline";

// function CourseInfo() {
export default function SearchRes(props) {
  const [trains, setTrains] = useState([]);
  let train = {};
  train.f_sp = props.f_sp;
  train.f_dp = props.f_dp;
  train.f_class = props.f_class;
  train.f_doj = props.f_doj;
  const f_trains = async (train) => {
    try {
      setTrains([]);
      console.log("aksjfhf");
      const res = await searchTrain(train);
      setTrains(res);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    f_trains(train);
  }, []);

  return (
    <div>
      {props.f_sp}
      {props.f_dp}
      {props.f_doj}
      {props.f_class}
    </div>
  );
}
