
export default function ExpenseItem(props) {
  return (
    <div>
      <div>{props.date}</div>
      <div>
        <h4>{props.description}</h4>
        <p>{props.price}</p>
      </div>
    </div>
  )
}
