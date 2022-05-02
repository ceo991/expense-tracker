
export default function ExpenseForm(props) {
  return (
    <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" onChange={props.setDescription}/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={props.setPrice}/>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" onChange={props.setDate}/>
        <button onClick={()=>props.addExpense(props.currentExpense)}>Add Expense</button>
    </div>
  )
}
