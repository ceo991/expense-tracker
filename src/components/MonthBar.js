import './Summary.css'
function MonthBar(props) {
  return (
    <div className="month--container">
        <div className="progress">
          <div className="progress__fill" style={{height:`${props.percentage}%`}}></div>
        </div>
        <h6>{props.month}</h6>
    </div>
  )
}

export default MonthBar