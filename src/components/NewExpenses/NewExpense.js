import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const submittedExpenseData = (data) => {
    // console.log(data);
    props.newExpenseData(data);
    setFormVisible(false);
  };
  const formVisibilityHandler = (e) => {
    setFormVisible(e);
  };

  return (
    <div className="new-expense">
      {formVisible ? (
        <ExpenseForm
          expenseFormData={submittedExpenseData}
          formVisibility={formVisibilityHandler}
        />
      ) : (
        <button
          onClick={() => {
            formVisibilityHandler(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
