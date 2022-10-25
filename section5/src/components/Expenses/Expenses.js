import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
}

export default Expenses;
