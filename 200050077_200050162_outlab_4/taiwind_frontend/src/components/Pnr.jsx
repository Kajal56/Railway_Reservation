import React, { useState } from "react";
import { searchPnr } from "./auth-api";

const PnrSearch = () => {
  const [pnr, setPnr] = useState("");
  const [bdetail, setBdetails] = useState({});
  const [issearch, setIsSearch] = useState(false);
  let pnr_dict = {};
  pnr_dict.pnr = pnr;
  const handleSearch = async () => {
    try {
      const res = await searchPnr(pnr_dict);
      console.log(res);
      setBdetails(res);
      setIsSearch(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="bg-slate-00">
      <div className="h-40 bg-slate-600">
        <div
          className="text-left text-lg py-3 m-auto flex justify-center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="text-center mt-10 pt-2">
            <div className="ml-3 mr-3">
              <input
                className="rounded  mr-3 p-2 w-[450px]"
                type="text"
                placeholder="Enter PNR"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
              />
              <br />
              <br />
            </div>

            <div className="px-0 pb-9 ml-0 mr-0 bg-slate-600 m-auto flex justify-center">
              <button
                className="rounded ml-20 mr-20 bg-red-600 px-9 py-2 text-white pb-3"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {issearch ? (
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
                        <th class="px-4 py-3">{bdetail.sp}</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y">
                      <tr class="text-gray-700">
                        <td class="px-4 py-3">Destination</td>
                        <td class="px-4 py-3">{bdetail.dp}</td>
                      </tr>
                      <tr class="text-gray-700">
                        <td class="px-4 py-3">Date of Journey</td>
                        <td class="px-4 py-3">{bdetail.doj}</td>
                      </tr>
                      <tr class="text-gray-700">
                        <td class="px-4 py-3">Class</td>
                        <td class="px-4 py-3">{bdetail.class}</td>
                      </tr>
                      <tr class="text-gray-700">
                        <td class="px-4 py-3">Train Number</td>
                        <td class="px-4 py-3">{bdetail.trainno}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-6 flex justify-end">
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PnrSearch;
