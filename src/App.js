import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import { v4 as uuidv4 } from 'uuid';
function App() {

const[expense,setExpense] = useState({
  description:"",
  price:0,
  date:""
})
const[expenses,setExpenses] = useState([])
const[total,setTtotal] = useState(0)

useEffect(()=>{
  sumOfExpenses()
},[expenses])

useEffect(()=>{
  console.log(total)
},[total])

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

let addExpenseItem = (expense)=>{
  if(expense){
    setExpenses(prevExpenses=>{return [...prevExpenses,expense]})
  }
}

let sumOfExpenses = ()=>{
  if(expense){
    setTtotal(prevTotal => prevTotal + parseInt(expense.price))
  }
}

const singleExpense = expenses.map(exp=>{
  return (
      <ExpenseItem
        key={uuidv4()} 
        date={exp.date} 
        description={exp.description} 
        price={exp.price}
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
      {expenses.length>0 && singleExpense}
    </div>
  );
}

export default App;