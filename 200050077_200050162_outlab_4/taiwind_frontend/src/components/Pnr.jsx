import React, { useState } from 'react';
import Link from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';



const SearchBox = () => {
    const [pnr, setPnr] = useState("");

    return (
        <div className='bg-slate-00'>
            <div className="h-40 bg-slate-600">
                <div className="text-left text-lg py-3 m-auto flex justify-center" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="text-center mt-10 pt-2">
                        <div className='ml-3 mr-3'>
                            <input
                                className="rounded  mr-3 p-2 w-[450px]"
                                type="text"
                                placeholder="State, city or town"
                                value={pnr}
                                onChange={(e) => setPnr(e.target.value)}
                            />
                            <br/>
                            <br/>

                        </div>

                        <div className="px-0 pb-9 ml-0 mr-0 bg-slate-600 m-auto flex justify-center">
                            <button className="rounded ml-20 mr-20 bg-red-600 px-9 py-2 text-white pb-3"
                                onClick={() => {
                                    return;
                                    // if(location == "banana") return;
                                    // router.push("/search");  //Got to see routing
                                }
                                }>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Outlet/> */}
        </div>

    );
};

export default SearchBox;