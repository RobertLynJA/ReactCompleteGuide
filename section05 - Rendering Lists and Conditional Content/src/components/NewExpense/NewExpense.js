import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    let [isFormVisible, updateIsFormVisible] = useState(false);

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={() => updateIsFormVisible(true)}>Add New Expense</button>}
      {isFormVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={() => updateIsFormVisible(false)} />}
    </div>
  );
};

export default NewExpense;
