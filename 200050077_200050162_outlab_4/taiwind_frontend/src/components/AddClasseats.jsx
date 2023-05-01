import React, {useState} from "react";
import { add_classeats, add_train } from "./auth-api";

export default function AddClassseats() {
    const [st, setSt] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [day, setDay] = useState("Day 1");
    const [distance, setDistance] = useState("");
    const [dt, setDt] = useState("");
    const [tname, setTname] = useState("");
    //------------
    const [trainno, setTrainno] = useState("");
    //source already there, destination 
    const [doj, setDoj] = useState("");
    //change day for class
    const [jclass, setJclass] = useState("AC1");

    // modify distance for fare
    const [fare, setFare] = useState("");
    // modify distance for seats left
    const [seatsleft, setSeatsleft] = useState("");
    
  
    //---------------
    const [sp, setSp] = useState("");
    const [dp, setDp] = useState("");
    //   const [st, setSt] = useState("");
    //   const [dd, setDd] = useState("Day 1");
    //   const [distance, setDistance] = useState("");
  
    //   const []
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log("Handle submit called");
      console.log(jclass);
      let train = {}
      train.sp = source
      train.dp = destination
      train.doj = doj
      train.fare = fare
      train.seatsleft = seatsleft
    //   train.tname = tname
      train.trainno = trainno
      train.j_class = jclass
      console.log("Check 1");
  
      const res = await add_classeats(train);
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
                htmlFor="trainno"
              >
                Train Number
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="number"
                id="trainno"
                name="trainno"
                placeholder="Train number"
                value={trainno}
                onChange={(e) => setTrainno(e.target.value)}
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

            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="doj"
              >
                Date of Journey
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="date"
                id="doj"
                name="doj"
                placeholder=""
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
              />
            </div>


            <div className="w-[300]">
              <label
                className=" block font-semibold text-gray-700 mb-2"
                htmlFor="jclass"
              >
                Class
              </label>
              <select
                className="w-[300]  border border-gray-400 p-2 rounded-md"
                id="jclass"
                name="jclass"
                value={jclass}
                onChange={(e) => setJclass(e.target.value)}
              >
                <option value="AC1">AC1</option>
                <option value="AC2">AC2</option>
                <option value="AC3">AC3</option>
                <option value="SL">SL</option>
                <option value="CC">CC</option>
                <option value="EC">EC</option>
              </select>
            </div>
            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="seatsleft"
              >
                Seats
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="number"
                id="seatsleft"
                name="seatsleft"
                placeholder="Seats"
                value={seatsleft}
                onChange={(e) => setSeatsleft(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="fare"
              >
                Distance
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="number"
                id="fare"
                name="fare"
                placeholder="Fare"
                value={fare}
                onChange={(e) => setFare(e.target.value)}
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
  