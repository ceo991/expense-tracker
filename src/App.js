import { useEffect, useRef, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import { v4 as uuidv4 } from 'uuid';
import Summary from './components/Summary';

function App() {

const[expense,setExpense] = useState({
  description: "",
  price: "",
  date: ""
})
const[expenses,setExpenses] = useState([])
const[total,setTtotal] = useState(0)

// const descRef = useRef()
// const dateRef = useRef()
// const priceRef = useRef()


// useEffect(()=>{
//   console.log(roundStringNumberWithoutTrailingZeroes(0.57,1))//use this func to calculate percentage by months 
// })

let handleDescription=(e)=>{
    const {value} = e.target
    if(value){
      setExpense(prevExpense=>{
      return{
        ...prevExpense,
        description: value
      }
    })
  }
}

let handlePrice=(e)=>{
  const {value} = e.target
  if(value){
    setExpense(prevExpense=>{
      return{
        ...prevExpense,
        price: value
      }
    })
  }
}
let handleDate=(e)=>{
  const {value} = e.target
  if(value){
    setExpense(prevExpense=>{
      return{
        ...prevExpense,
        date: value
      }
    })
  }
}

let addExpenseItem = (e,expense)=>{
  e.preventDefault()
  console.log(e)
  if(expense){
    setExpenses(prevExpenses=>{return [...prevExpenses,expense]})
    setTtotal(prevTotal => prevTotal + parseInt(expense.price))
    setExpense({
      description: "",
      price: "",
      date: ""
    })
  }
}

let removeExpenseItem = (index)=>{
  if(expenses.length>0){
    let tempArr = [...expenses]
    tempArr.splice(index,1)
    setExpenses(tempArr)
    console.log(expenses[index])
    setTtotal(prevTotal => prevTotal - expenses[index].price)
  }
}

let roundStringNumberWithoutTrailingZeroes = function  (num, dp) {
  if (arguments.length != 2) throw new Error("2 arguments required");

  num = String(num);
  if (num.indexOf('e+') != -1) {
      // Can't round numbers this large because their string representation
      // contains an exponent, like 9.99e+37
      throw new Error("num too large");
  }
  if (num.indexOf('.') == -1) {
      // Nothing to do
      return num;
  }

  var parts = num.split('.'),
      beforePoint = parts[0],
      afterPoint = parts[1],
      shouldRoundUp = afterPoint[dp] >= 5,
      finalNumber;

  afterPoint = afterPoint.slice(0, dp);
  if (!shouldRoundUp) {
      finalNumber = beforePoint + '.' + afterPoint;
  } else if (/^9+$/.test(afterPoint)) {
      // If we need to round up a number like 1.9999, increment the integer
      // before the decimal point and discard the fractional part.
      finalNumber = Number(beforePoint)+1;
  } else {
      // Starting from the last digit, increment digits until we find one
      // that is not 9, then stop
      var i = dp-1;
      while (true) {
          if (afterPoint[i] == '9') {
              afterPoint = afterPoint.substr(0, i) +
                           '0' +
                           afterPoint.substr(i+1);
              i--;
          } else {
              afterPoint = afterPoint.substr(0, i) +
                           (Number(afterPoint[i]) + 1) +
                           afterPoint.substr(i+1);
              break;
          }
      }

      finalNumber = beforePoint + '.' + afterPoint;
  }

  // Remove trailing zeroes from fractional part before returning
  return parseFloat(finalNumber.replace(/0+$/, ''))
}

const singleExpense = expenses.map((exp,index)=>{
  return (
      <ExpenseItem
        key={uuidv4()} 
        date={exp.date} 
        description={exp.description} 
        price={exp.price}
        index={index}
        removeExpenseItem={removeExpenseItem}
      />
    )
  }
)

  return (
    <div id="app">
      <ExpenseForm 
        setDescription={handleDescription}
        setPrice={handlePrice}
        setDate={handleDate}
        addExpense={addExpenseItem}
        currentExpense={expense}
      />
      <Summary />
      {expenses.length>0 && singleExpense}
    </div>
  );
}

export default App;