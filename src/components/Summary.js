import './Summary.css'
import MonthBar from './MonthBar';
function Summary(props) {

let generateBars = ()=>{
  let bars=[]
  for(let i = 1; i<13;i++){
    let monthPrice = props.months.map(data=>{
      if(data.month===i){
        return data.price
      }
    }).filter(num=>num!==undefined).map(num=>parseFloat(num))
    console.log(monthPrice)
    let label = new Date(1999,i-1,1).toLocaleString('en-US',{month:"short"})
    let theVal = monthPrice.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    bars.push(<MonthBar month = {label} key={label} percentage={monthPrice.length>0 ? Math.round((theVal/props.total)*100) : 0}/>)
  }
  return bars
}

const opt = props.years.map(year=>{
  let theValue =  props.years.length>1? year : "none"
  return  <option value = {theValue} key={theValue}> {theValue} </option> 
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
        {generateBars()}
      </div>
    </div>
  )
}

export default Summary