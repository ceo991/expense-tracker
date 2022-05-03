import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Summary(props) {
  
  //console.log(props.years)
  //console.log(props.years.length > 1)

  const opt = props.years.map(year=>{
    //console.log(props.years.length>1? year : "none")
    // return  <option value = {props.selectedYear} key={uuidv4()}> {props.selectedYear} </option>
    let theValue =  props.years.length>1? year : "none"
    return  <option value = {theValue} key={uuidv4()}> {theValue} </option> 
  })

  return (
    <div>
      <div>
        <label htmlFor='years'>Select By Year: </label>
        <select name="years" id="years" onChange={props.selectYear} value={props.selectedYear}>
          {opt}
        </select>
      </div>
      {props.total}$
    </div>
  )
}

export default Summary