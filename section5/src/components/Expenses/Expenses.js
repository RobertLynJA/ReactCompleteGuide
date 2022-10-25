import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredList, setFilteredList] = useState(
    props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    )
  );

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    setFilteredList(
      props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      )
    );
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <Card className="expenses">
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
}

export default Expenses;
