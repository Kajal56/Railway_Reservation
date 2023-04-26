import React, { useState } from 'react';
import Link from 'react-router-dom';
import Select from 'react-select';
import Tabs from './Tabs';
import NavBar from './NavBar';
import SearchRes from './SearchRes';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Dropdown from './Dropdown.jsx';    //why the hell ?
import Example from './Tabs';

const SearchBox = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("12-02-1992");
    const [selectedClass, setSelectedClass] = useState('CLASS');
    const [search, setSearch] = useState(false);
// 
    const [sp, setSp] = useState("");
    const [dp, setDp] = useState("");
    const [doj, setDoj] = useState("12-02-1992");
    const [selclass, setSelclass] = useState('CLASS');


const handleClick = async () => {
        // call the backend api to display data
        // setSearch(true) ;
        setSearch(true) ;
        setDoj(date) ;
        setDp(destination) ;
        setSp(source) ;
        setSelclass(selectedClass) ;
    }

    return (
        // <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className='bg-slate-00'>
            {/* <Example />  */} {/*Tabs..........but I think it's complex for now, will navigate through links only, for the time being*/ }
            <div className="h-80 bg-slate-600">
                <div className="text-center mt-10 pt-2">
                    <h1 className="text-white text-5xl font-bold mb-2">
                        Find your train
                    </h1>

                    <div className="text-left text-lg py-3 m-auto flex justify-center" style={{ display: "flex", flexDirection: "column" }}>
                        <div className='ml-3 mr-3'>
                            <input
                                className="rounded  mr-3 p-2 w-[450px]"
                                type="text"
                                placeholder="State, city or town"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                            />
                            <br />
                            <br />
                            <input
                                className="rounded  mr-3 p-2 w-[450px]"
                                type="text"
                                placeholder="State, city or town"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}

                            />
                        </div>
                        <br />
                        <div className=" bg-slate-600">
                            <input
                                className="rounded ml-3 mr-3 p-2 w-[450px]"
                                type="date"
                                //   placeholder=""
                                value={date}
                                onChange={(e) => setDate(e.target.value)}

                            />
                            <br />
                            <br />
                            <div className='ml-3 mr-3'>
                                {/* <Dropdown></Dropdown> */}

                                <div className="flex justify-between">
                                    <p className='ml-3 self-center'>Select journey date :</p>
                                    <select className='m1-auto mr-3 self-center'
                                        value={selectedClass}
                                        onChange={e => setSelectedClass(e.target.value)}
                                    >
                                        <option value="AC1">AC1</option>
                                        <option value="AC2">AC2</option>
                                        <option value="AC3">AC3</option>
                                        <option value="CC">CC</option>
                                        <option value="EC">EC</option>
                                        <option value="SL">SL</option>
                                        <option value="SL">ANY</option>
                                    </select>
                                </div>


                            </div>
                            <br />
                            <br />
                        </div>
                        <div className="px-0 ml-0 mr-0 bg-slate-600 m-auto flex justify-center">
                            <button className="rounded ml-20 mr-20 bg-red-600 px-9 py-2 text-white pb-3"
                                onClick={handleClick}>
                                Search
                            </button>
                        </div>
                        {search}
                    </div>
                </div>
                {search ?  <SearchRes  f_sp = {sp} f_dp ={dp} f_class={selclass} f_doj={doj}/> : <h2>Select some parameters</h2>}
                {/* <SearchRes  f_sp = {sp} f_dp ={dp} f_class={selclass} f_doj={doj}/> */}
            </div>
        </div>


    );
};

export default SearchBox;