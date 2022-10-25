import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredList, setFilteredList] = 
    useState(props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear));

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    setFilteredList(props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear));
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <Card className="expenses">
        {filteredList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
