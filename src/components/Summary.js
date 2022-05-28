import './Summary.css'
import { v4 as uuidv4 } from 'uuid';
import MonthBar from './MonthBar';

function Summary(props) {

  const chartDataPoints =[{label:"Jan", value:0},{label:"Feb", value:0},
  {label:"Mar", value:0},{label:"Apr", value:0},{label:"May", value:0}
  ,{label:"Jun", value:0},{label:"Jul", value:0},{label:"Aug", value:0}
  ,{label:"Sep", value:0},{label:"Oct", value:0},{label:"Nov", value:0}
  ,{label:"Dec", value:0}
  ]


  


// let generateBars = ()=>{
//   let bars=[]
//   //let bar
//   for(let i = 1; i<13;i++){
//     let monthPrice = props.months.map(data=>{
//       if(data.month===i){
//         return data.price
//       }
//     }).filter(num=>num!==undefined).map(num=>parseFloat(num))
//     let theVal = monthPrice.length>0 ? monthPrice.reduce((previousValue, currentValue) => previousValue + currentValue, 0) : 0
//     bars.push(<MonthBar month = {new Date(1999,i-1,1).toLocaleString('en-US',{month:"short"})} key={uuidv4()} percentage={Math.round((parseFloat(theVal)/props.total)*100)}/>)
//   }
//   return bars
// }

for (const expense of props.expenses) {
  const expenseMonth = parseInt(expense.month)-1; // starting at 0 => January => 0
  chartDataPoints[expenseMonth].value += expense.price;
}


const dataPointValues = chartDataPoints.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);

const opt = props.years.map(year=>{
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

    <div className='summary--container'>
      {/* {generateBars()} */}
      {chartDataPoints.map((dataPoint) => (
        <MonthBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>

      {/* {props.total}$ */}
    </div>
  )
}

export default Summary