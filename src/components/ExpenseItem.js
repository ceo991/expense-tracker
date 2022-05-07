import './ExpenseItem.css'

function ExpenseItem(props) {

  return (
    <div className='expense-item'>
      <div>{props.date}</div>
      <div>
        <h2 className='expense-item__description'>{props.description}</h2>
        <p  className='expense-item__price'>{props.price}$</p>
      </div>
      <button onClick={()=>props.removeExpenseItem(props.index)}>X</button>
    </div>
  )
}
export default ExpenseItem