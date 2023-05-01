import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { add_train } from "./auth-api";

// import { useState } from "react";
// import React, { useState } from "react";

export default function AddTrain() {
  const [st, setSt] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("Day 1");
  const [distance, setDistance] = useState("");
  const [dt, setDt] = useState("");
  const [tname, setTname] = useState("");

  //---------------
  const [sp, setSp] = useState("");
  const [dp, setDp] = useState("");
  //   const [st, setSt] = useState("");
  //   const [dd, setDd] = useState("Day 1");
  //   const [distance, setDistance] = useState("");

  //   const []

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("HAndle submit called");
    let train = {}
    train.sp = source
    train.dp = destination
    train.st = st
    train.dt = dt
    train.dd = day
    train.tname = tname
    train.distance = distance
    console.log("Check 1");

    const res = await add_train(train);
    console.log("Check 2");

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="st"
            >
              Leaving Time
            </label>
            <input
              className="w-[300px] border border-gray-400 p-2 rounded-md"
              type="time"
              id="st"
              name="st"
              placeholder="HH:MM:SS"
              value={st}
              onChange={(e) => setSt(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="dt"
            >
              Reaching Time
            </label>
            <input
              className="w-[300px] border border-gray-400 p-2 rounded-md"
              type="time"
              id="dt"
              name="dt"
              placeholder="HH:MM:SS"
              value={dt}
              onChange={(e) => setDt(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="tname"
            >
              Train name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="tname"
              name="tname"
              placeholder="Train name"
              value={tname}
              onChange={(e) => setTname(e.target.value)}
            />
          </div>

          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="source"
            >
              Source
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="source"
              name="source"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="destination"
            >
              Destination
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="text"
              id="destination"
              name="destination"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="w-[300]">
            <label
              className=" block font-semibold text-gray-700 mb-2"
              htmlFor="day"
            >
              Day
            </label>
            <select
              className="w-[300]  border border-gray-400 p-2 rounded-md"
              id="day"
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="Day 1">Day 1</option>
              <option value="Day 2">Day 2</option>
              <option value="Day 3">Day 3</option>
              <option value="Day 4">Day 4</option>
              <option value="Day 5">Day 5</option>
            </select>
          </div>
          <div>
            <label
              className="block font-semibold text-gray-700 mb-2"
              htmlFor="distance"
            >
              Distance
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-md"
              type="number"
              id="distance"
              name="distance"
              placeholder="Distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default CardForm;

//------------------------

function TBUL() {
  const [tname, setTname] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [day, setDay] = useState("");

  function handleTnameChange(event) {
    setTname(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleDistanceChange(event) {
    setDistance(event.target.value);
  }

  function handleDayChange(event) {
    setDay(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Train Name: ", tname);
    console.log("Time: ", time);
    console.log("Distance: ", distance);
    console.log("Day: ", day);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen"
    >
      <div className="w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl mb-4">Enter Train Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="tname">
            Train Name:
          </label>
          <input
            type="text"
            id="tname"
            value={tname}
            onChange={handleTnameChange}
            className="w-full border rounded-lg py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            className="w-full border rounded-lg py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="distance"
          >
            Distance:
          </label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={handleDistanceChange}
            className="w-full border rounded-lg py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="day">
            Day:
          </label>
          <select
            id="day"
            value={day}
            onChange={handleDayChange}
            className="w-full border rounded-lg py-2 px-3"
          >
            <option value="">Select Day</option>
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
            <option value="Day 3">Day 3</option>
            <option value="Day 4">Day 4</option>
            <option value="Day 5">Day 5</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

//---------------------

function ToBeUsedLater() {
  const [tname, setTname] = useState("");
  const [sp, setSp] = useState("");
  const [dp, setDp] = useState("");
  const [st, setSt] = useState("");
  const [dt, setDt] = useState("");
  const [dd, setDd] = useState("");
  const [distance, setDistance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      tname,
      sp,
      dp,
      st,
      dt,
      dd,
      distance,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Add Train Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="tname"
                className="block text-gray-700 font-bold mb-2"
              >
                Train Name
              </label>
              <input
                type="text"
                id="tname"
                name="tname"
                value={tname}
                onChange={(e) => setTname(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="sp"
                className="block text-gray-700 font-bold mb-2"
              >
                Source
              </label>
              <input
                type="text"
                id="sp"
                name="sp"
                value={sp}
                onChange={(e) => setSp(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dp"
                className="block text-gray-700 font-bold mb-2"
              >
                Destination
              </label>
              <input
                type="text"
                id="dp"
                name="dp"
                value={dp}
                onChange={(e) => setDp(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="st"
                className="block text-gray-700 font-bold mb-2"
              >
                Start Time
              </label>
              <input
                type="text"
                id="st"
                name="st"
                value={st}
                onChange={(e) => setSt(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dt"
                className="block text-gray-700 font-bold mb-2"
              >
                Departure Time
              </label>
              <input
                type="time"
                id="dt"
                name="dt"
                value={dt}
                onChange={(e) => setDt(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./auth-api";
export default function AddTrain() {
//   const [emailid, setEmailid] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [mobileno, setMobileno] = useState("");
//   const [problem, setProblem] = useState(false);
//   const [message, setMessage] = useState("");
  const [problem, setProblem] = useState(false);
  const [message, setMessage] = useState("");

  //-----------
  const [tname, setTname] = useState("");
  const [sp, setSp] = useState("");
  const [dp, setDp] = useState("");
  const [st, setSt] = useState("");
  const [dt, setDt] = useState("");
  const [dd, setDd] = useState("Day 1");
  const [distance, setDistance] = useState("");
  //-----------
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
//     event.preventDefault();
//     // res = login({})
//     let user = {};
//     user.emailid = emailid;
//     user.password = password;
//     user.dob = dob;
//     user.mobileno = mobileno;
//     const res = await register(user);
//     console.log(res);
//     if (res.success) {
//       navigate("/login");
//     } else {
//       setProblem(true);
//       setMessage(res.message);
//     }
  };


  return (
    <div class="border-2 border-gray-200 p-4 rounded-md w-96 mx-auto">
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="tname">
            Train Name
          </label>
          <input
            class="border rounded-md py-2 px-3 w-full"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={emailid}
            onChange={(event) => setEmailid(event.target.value)}
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="border rounded-md py-2 px-3 w-full"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="mobile">
            Mobile Number
          </label>
          <input
            class="border rounded-md py-2 px-3 w-full"
            type="tel"
            id="phone"
            name="phone"
            value={mobileno}
            onChange={(event) => setMobileno(event.target.value)}
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="dob">
            Date of Birth
          </label>
          <input
            class="border rounded-md py-2 px-3 w-full"
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
      {problem ? <div>{message}</div> : <div></div>}

    </div>
  );
}


*/
