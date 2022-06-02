import './ExpenseForm.css'

export default function ExpenseForm(props) {
    return (
          props.willAdd
          ?
          <div  className='new-expense__controls' id="expense-form">
            <form  className='new-expense__control' onSubmit={(e) => props.addExpense(e,props.currentExpense)} style={{display: "inline"}}>
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" value={props.currentExpense.description} onChange={props.setDescription} required/>

              <label htmlFor="price">Price</label>
              <input type="number" name="price" id="price" value={props.currentExpense.price} onChange={props.setPrice} required/>

              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" value={props.currentExpense.date} onChange={props.setDate} required/>
              <div>
                <button className='new-expense__actions' type="submit" style={{backgroundColor: "#075e56", border:"none"}}><span>Add</span></button>
                <button  className='new-expense__actions' onClick={props.toggleExpenseForm} style={{backgroundColor: "#de7709", border:"none"}}><span>X</span></button>
              </div>
          </form>
        </div>
        :
        <button onClick={props.toggleExpenseForm} id="add-button" style={{backgroundColor: "#1c8c81", border:"none", color:"aliceblue"}} >New Expense</button> 
      
    )
}