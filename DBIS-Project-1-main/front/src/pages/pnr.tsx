import { useState } from "react";
import Nav from "./nav";

interface PNR_Object {
  pnr:Number
}

const pnr_search = async (pnr: PNR_Object) => {
  const response = await fetch("http://localhost:5000/v2/pnr-search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pnr)
  });
  const json = await response.json();
  return json
}

export default function PNR() {
  const [isShown, setIsShown] = useState(false);
  const [pnr, setPNR] = useState(Number);

  const handleSearch = async () => {
    const pnr_num = {
      pnr: pnr
    }
    const result = await pnr_search(pnr_num)
    console.log(result)
    // if result not null
    setIsShown(true);
  }

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Nav/>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Enter the PNR number please
              </h1>
              {/* SEARCH BAR */}
              <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                  className="rounded  mr-3 p-2 w-[450px]"
                  type="text"
                  onChange={event => setPNR(Number(event.target.value))}
                />
                <button className="rounded bg-blue-600 px-9 py-2 text-white"
                onClick={handleSearch}>
                  Search
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            {isShown && (
              <div
                className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
              >
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                  alt=""
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">Mexican</p>
                    <p className="mr-3">$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </div>
            )}
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
