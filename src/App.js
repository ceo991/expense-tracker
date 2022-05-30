import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import Summary from './components/Summary';

function App() {

const[expense,setExpense] = useState({
  description: "",
  price: "",
  date: "",
  year: "",
  month: ""
})


const[years,setYears] = useState(["none"])
const[currentMonths,setCurrentMonths] = useState([])
const[selectedYear,setSelectedYear] = useState("none")
const[expenses,setExpenses] = useState([])
const[theSum,setTheSum] = useState(0)
const[willAdd,setWillAdd] = useState(false)


useEffect(()=>{
  let sumArr = selectedYear === "none" ? expenses : expenses.filter(expense => expense.year === parseInt(selectedYear))
  setCurrentMonths(sumArr.map(year=>year))
  setTheSum(sumArr.map(el=>parseFloat(el.price)).reduce((previousValue, currentValue) => previousValue + currentValue, 0))


},[selectedYear,expenses])

// useEffect(()=>{
//   let arr = [...theArr.map(el=>el.year)]
  
//   // arr = arr.map(year=>years.indexOf(year) === -1 ? year : null)

//   console.log(arr)

//   setYears(arr.length>0 ? ["none",...arr.sort((a,b)=>a-b)] : ["none"])
  
// },[expenses])

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
    setExpenses(prevExpenses=> [...prevExpenses,expense])

    let tempArr = [...expense.date.split("-")]
  
    if(years.indexOf(tempArr[0]) === -1){
      setYears(prevYears=>[...prevYears,tempArr[0]])
    }
    
    setExpense({
      description: "",
      price: "",
      date: "",
      year: "",
      month: ""
    })
    toggleExpenseForm()
  }
}

let removeExpenseItem = (index)=>{
  
  if(expenses.length>0){
    let tempArr = [...expenses]
    tempArr.splice(index,1)
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

let theArr = selectedYear === "none" ? expenses : expenses.filter(expense => expense.year === parseInt(selectedYear))

let singleExpense = theArr.map((exp,index)=>{
  return (
      <ExpenseItem
        key={index}
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
        {
        willAdd 
        ? 
        <ExpenseForm 
          setDescription={handleDescription}
          setPrice={handlePrice}
          setDate={handleDate}
          addExpense={addExpenseItem}
          currentExpense={expense}
          cancel={toggleExpenseForm}
        /> 
        : 
        <button onClick={toggleExpenseForm} >Add Expense</button> 
        }

      <Summary total={theSum} years={years} selectYear={handleYearChange} selectedYear={selectedYear} months={currentMonths} expenses={theArr}/>

      {
        expenses.length>0 && <div className="expenses">{singleExpense}</div>
      }
    </div>
  );
}

export default App;