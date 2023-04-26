import React, { useState } from 'react';
// import Select from 'react-select';

export default function Dropdown() {
  const [selectedClass, setSelectedClass] = useState('CLASS');
  return (
    <div className="flex justify-between">
      {/* <label>  */}
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
      {/* </label> */}
      {/* <p>Your favorite fruit: {selectedFruit}</p> */}
    </div>
  );
}
