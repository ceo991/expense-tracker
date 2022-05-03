
export default function ExpenseForm(props) {
  return (
    <div id="expenseForm">
      <form onSubmit={(e) => props.addExpense(e,props.currentExpense)} style={{display: "inline"}}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" value={props.currentExpense.description} onChange={props.setDescription} required/>

          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" value={props.currentExpense.price} onChange={props.setPrice} required/>

          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" value={props.currentExpense.date} onChange={props.setDate} required/>

          <button type="submit">Add</button>
      </form>
      <button onClick={props.cancel}>Cancel</button>
    </div>
  )
}
