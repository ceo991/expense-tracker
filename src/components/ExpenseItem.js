import "./ExpenseItem.css";

function ExpenseItem(props) {
  const dateArr = props.date.split("-").map((el) => parseInt(el));

  const month = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).toLocaleString(
    "en-Us",
    { month: "long" }
  );
  const day = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).toLocaleString(
    "en-Us",
    { day: "2-digit" }
  );
  const year = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-day">{day}</div>
        <div className="expense-year">{year}</div>
      </div>
      <div>
        <h2 className="expense-item__description">{props.description}</h2>
        <p className="expense-item__price">{props.price}$</p>
      </div>
      <button onClick={() => props.removeExpenseItem(props.id)}>X</button>
    </div>
  );
}
export default ExpenseItem;
