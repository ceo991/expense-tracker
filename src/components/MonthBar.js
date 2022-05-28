import './Summary.css'


function MonthBar(props) {

  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="month--container">
        <div className="progress">
          <div className="progress__fill" style={{height:barFillHeight}}></div>
        </div>
        <h6>{props.label}</h6>
    </div>
  )
}


// const MonthBar = (props) => {
//   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
//   const totalMaximum = Math.max(...dataPointValues);

//   return (
//     <div className='chart'>
//       {props.dataPoints.map((dataPoint) => (
//         <ChartBar
//           key={dataPoint.label}
//           value={dataPoint.value}
//           maxValue={totalMaximum}
//           label={dataPoint.label}
//         />
//       ))}
//     </div>
//   );
// };



export default MonthBar