import React, {useState} from "react";
import { add_classeats, add_train, make_admin } from "./auth-api";

export default function MakeAdmin() {
    const [trainno, setTrainno] = useState("");
    const [id_no, setId_no] = useState("");
    
  
    //---------------
    const [sp, setSp] = useState("");
    const [dp, setDp] = useState("");
    //   const [st, setSt] = useState("");
    //   const [dd, setDd] = useState("Day 1");
    //   const [distance, setDistance] = useState("");
  
    //   const []
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      let user = {}
        user.to_be_admin = id_no 
      console.log("Check 1");
  
      const res = await make_admin(user);
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
                htmlFor="id_no"
              >
                Add ID
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-md"
                type="number"
                id="id_no"
                name="id_no"
                placeholder="ID"
                value={id_no}
                onChange={(e) => setId_no(e.target.value)}
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
  