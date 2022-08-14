import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import Summary from './components/Summary';
import { v4 as uuidv4 } from 'uuid';

function App() {

const[expense,setExpense] = useState({
  id: "",
  description: "",
  price: "",
  date: "",
  year: "",
  month: ""
})
const[years,setYears] = useState([""])
const[currentMonths,setCurrentMonths] = useState([])
const[selectedYear,setSelectedYear] = useState("All Years")
const[expenses,setExpenses] = useState([])
const[theSum,setTheSum] = useState(0)
const[willAdd,setWillAdd] = useState(false)
const EXPENSE_KEY="EXPENSE";

useEffect(()=>{
  const storedExpenses = JSON.parse(localStorage.getItem(EXPENSE_KEY));

  if(storedExpenses && storedExpenses.length>0){
    setExpenses(storedExpenses)
  }

},[])

useEffect(()=>{
  let sumArr = selectedYear === "All Years" ? expenses : expenses.filter(expense => expense.year === parseInt(selectedYear))
  setCurrentMonths(sumArr.map(year=>year))
  setTheSum(sumArr.map(el=>parseFloat(el.price)).reduce((previousValue, currentValue) => previousValue + currentValue, 0))

  if(theArr.length < 1){
    setSelectedYear(years[years.length-1])
  }
},[selectedYear,expenses])

useEffect(()=>{
  
  let arr = [...expenses]
  arr = arr.map(el => el.year)
  arr =  remove_duplicates_es6(arr)
  setYears(expenses.length > 0 ? ["All Years", ...arr.sort((a,b)=>a-b)] : ["All Years"])
  localStorage.setItem(EXPENSE_KEY, JSON.stringify(expenses))

},[expenses])

function remove_duplicates_es6(arr) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

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
  let tempArr = [...value.split("-")]
  if(value){
    
    setExpense(prevExpense=>{
      
      return{
        ...prevExpense,
        id: uuidv4(),
        date: value,
        year: parseInt(tempArr[0]),
        month: parseInt(tempArr[1])
      }
    })
  }
}

let addExpenseItem = (e,expense)=>{
  e.preventDefault()
  if(expense){

    setExpenses(prevExpenses=> [expense, ...prevExpenses])

    let tempArr = [...expense.date.split("-")]
  
    if(years.indexOf(tempArr[0]) === -1){
      setYears(prevYears=>[...prevYears,tempArr[0]])
    }
    
    setExpense({
      id: "",
      description: "",
      price: "",
      date: "",
      year: "",
      month: ""
    })
    toggleExpenseForm()
  }
}

let removeExpenseItem = (id)=>{
  
  if(expenses.length>0){
    let tempArr = [...expenses]
    let uniqExpense = tempArr.filter(exp => exp.id === id)[0]
    tempArr.splice(expenses.indexOf(uniqExpense), 1)
    setExpenses(tempArr)
  }
}

let handleYearChange=(e)=>{
  const {value} = e.target
  setSelectedYear(value)
}

let toggleExpenseForm=()=>{
  setWillAdd(prevVal=>!prevVal)
}

 
 let theArr = selectedYear === "All Years" ? expenses : expenses.filter(expense => expense.year === parseInt(selectedYear))

let singleExpense = theArr.map((exp)=>{
  return (
      <ExpenseItem
        key={exp.id}
        date={exp.date} 
        description={exp.description} 
        price={exp.price}
        id={exp.id}
        removeExpenseItem={removeExpenseItem}
      />
    )
  }
)

  return (
    <div id="app">
      <div className='form-container'>
        <ExpenseForm 
          setDescription={handleDescription}
          setPrice={handlePrice}
          setDate={handleDate}
          addExpense={addExpenseItem}
          currentExpense={expense}
          willAdd={willAdd}
          toggleExpenseForm={toggleExpenseForm}
        /> 
      </div>

      <Summary total={theSum} years={years} selectYear={handleYearChange} selectedYear={selectedYear} months={currentMonths} expenses={theArr}/>
      
      <div className="expenses">{expenses.length> 0 ? singleExpense : <h4 style={{color: "white"}}> No Entries Found</h4>}</div>
      <h4><a href='https://github.com/ceo991/expense-tracker' style={{color:"aliceblue",textDecoration: "none"}}>You can see the source code here</a></h4>
    </div>
  );
}

export default App;
