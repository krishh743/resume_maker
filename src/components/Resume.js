import React from 'react'
import './Resume.css';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calenders';




function Resume() {



    return (
        <>
            <div>
                <label>  Name : </label>
                <input type="text" placeholder="enter full name.." />
                <br />
                <label>  Birthday :  </label>

                <input type="date" placeholder="enter full name.." />
                <br />
                <label>  Email id :  </label>
                <input type="email" />
                <br />
                <label>  About : </label>
                <textarea />
                <br />
                <label>   Experienece(in year)  </label>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label> Comapany Name :  </label>
                <input type="text" name="Company_name" />
                <br />
                <label>  Job Post  </label>
                <input type="text" />
                <br />
                <label>  Your Location :  </label>
                <input type="text" />
                <br />
                <label> Description : </label>
                <input type="text" />
                <br />
                <label> isCurrent : </label>
                <input type="switch" />
                <br />
                <label> From-to : </label>

              
                {/* set date from to current date */}
  <DateRangePickerComponent></DateRangePickerComponent>
                <input type="text" name="datetimes" />
                <br />


                <label><h3> Education : </h3></label>

                <label>  Name : </label>
                <input type="text" />
                <br />
                <label>  Your Location :  </label>
                <input type="text" />
                <br />
                <label>  About : </label>
                <textarea />
                <br />

                {/* set date from to current date */}
                <label> From-to : </label>
                <input type="text" name="datetimes" />
                <br />

            </div>
        </>
    )
}

export default Resume
