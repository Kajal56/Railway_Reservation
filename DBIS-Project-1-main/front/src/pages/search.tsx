import Link from "next/link";
import { useState } from "react";

export default function Search() {
  const [destination, setDestination] = useState("");
  const [source, setSource] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  type Options = {
    adult: number;
    children: number;
  };

  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
  });

  const handleOption = (name: keyof Options, operation: string) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    // have to write the search function 
    // dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    // navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl"> Railway booking </Link>
          <div>
            <div className="flex">
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
              >
                Sign in
              </button>
              <button className="border p-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Enter Journey Details
              </h1>
              {/* SEARCH BAR */}
              <div className="text-left text-lg py-3 mt-9 flex justify-center">
                <input
                  className="rounded  mr-3 p-2 w-[300px]"
                  placeholder="From?"
                  onChange={(e) => setSource(e.target.value)}
                  type="text"
                />
                <input
                  className="rounded  mr-3 p-2 w-[300px]"
                  placeholder="To?"
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                />
                <input
                  className="rounded  mr-3 p-2 w-[150px]"
                  placeholder="Calendar"
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white">
                  Search
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>

          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          {/* <div className="headerSearchItem">
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div> */}
          <div className="headerSearchItem">
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{'${options.adult} adult · ${options.children} children '}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.adult}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
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
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
