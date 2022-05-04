import './Summary.css'
import { v4 as uuidv4 } from 'uuid';
import MonthBar from './MonthBar';

function Summary(props) {

    const opt = props.years.map(year=>{

    let theValue =  props.years.length>1? year : "none"
    return  <option value = {theValue} key={uuidv4()}> {theValue} </option> 
  })
  


let generateBars = ()=>{
  let bars=[]
  //let bar
  for(let i = 1; i<13;i++){
    let monthPrice = props.months.map(data=>{
      if(data.month===i){
        return data.price
      }
    }).filter(num=>num!==undefined).map(num=>parseInt(num))
    let theVal = monthPrice.length>0 ? monthPrice.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : 0
    bars.push(<MonthBar month = {new Date(1999,i-1,1).toLocaleString('en-US',{month:"short"})} key={uuidv4()} percentage={Math.round((parseInt(theVal)/props.total)*100)}/>)
  }
  return bars
}

  return (
    <div>
      <div>
        <label htmlFor='years'>Select By Year: </label>
        <select name="years" id="years" onChange={props.selectYear} value={props.selectedYear}>
          {opt}
        </select>
      </div>

    <div className='summary--container'>
      {generateBars()}
    </div>

      {props.total}$
    </div>
  )
}

export default Summary