import React from "react";
import "./Resume.css";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";

function Resume() {
  const startValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const endValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    15
  );
  const minDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    8
  );
  const maxDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    20
  );
  return (
    <>
      <div className="resume">
        <h2>Resume maker</h2>
      </div>
      <div className="main">
        <label> Name : </label>
        <input type="text" placeholder="enter full name.." />
        <br />
        <label> Birthday : </label>

        <input type="date" placeholder="enter full name.." />
        <br />
        <label> Email id : </label>
        <input type="email" />
        <br />
        <label> About : </label>
        <textarea />

        <label><h3> Experienece : </h3></label>
        Select : <select>
          <option value="0">0</option>
          <option value="1">1 year</option>
          <option value="2">2 year</option>
          <option value="3">3 year</option>
          <option value="4">4 year</option>
          <option value="5">5 year</option>
        </select>
        <br />
        <label> Comapany Name : </label>
        <input type="text" name="Company_name" />
        <br />
        <label> Job Post </label>
        <input type="text" />
        <br />
        <label> Your Location : </label>
        <input type="text" />
        <br />
        <label> Description : </label>
        <input type="text" />
        <br />
        <label> isCurrent : </label>
        <input type="switch" />
        <br />
        <label> From-to : </label>
        {/* React Date Range Picker  */}
        <input type="text" name="datetimes" />


        <div className="DateRangePicker">
          <DateRangePickerComponent
            placeholder="Enter Date Range"
            startDate={startValue}
            endDate={endValue}
            min={minDate}
            max={maxDate}
            minDays={3}
            maxDays={5}
            format="dd-MMM-yy"
          ></DateRangePickerComponent>
        </div>
        <div>
          {/* set date from to current date */}



          <label>
            <h3> Education : </h3>
          </label>

          <label> Name : </label>
          <input type="text" />
          <br />
          <label> Your Location : </label>
          <input type="text" />
          <br />
          <label> About : </label>
          <textarea />
          <br />

          {/* set date from to current date */}
          <label> From-to : </label>
          <input type="text" name="datetimes" />
          {/* Date Range Picker  */}
          <div className="DateRangePicker">
            <DateRangePickerComponent
              placeholder="Enter Date Range"
              startDate={startValue}
              endDate={endValue}
              min={minDate}
              max={maxDate}
              minDays={3}
              maxDays={5}
              format="dd-MMM-yy"
            ></DateRangePickerComponent>
          </div>
          <label><h3>   Skills :   </h3></label>

          Select : <select>
            <option value="0">C</option>
            <option value="1">C#</option>
            <option value="2">Java</option>
            <option value="3">Python</option>
            <option value="4">Javascript</option>
            <option value="5">C++</option>
          </select>
          <br />
          <label><h3>   Project :   </h3></label>

          <label> Name : </label>
          <input type="email" />
          <br />
          <label> Description : </label>
          <textarea />
          <br />
          <label> project role : </label>
          <input type="email" />
          <br />
        </div>
      </div>

      <button className="btn" >Create Resume</button>
    </>
  );
}

export default Resume;
