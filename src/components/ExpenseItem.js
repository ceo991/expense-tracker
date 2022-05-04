
function ExpenseItem(props) {

  return (
    <div>
      <div>{props.date}</div>
      <div>
        <h4>{props.description}</h4>
        <p>{props.price}$</p>
      </div>
      <button onClick={()=>props.removeExpenseItem(props.index)}>X</button>
    </div>
  )
}
export default ExpenseItem