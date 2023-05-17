import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        amount: +e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        date: e.target.value,
      };
    });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput);

    //passing data to parent(NewExpense)
    props.expenseFormData({
      ...userInput,
      id: Math.random().toString(),
      date: new Date(userInput.date), //formatting date
    });

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            onChange={amountChangeHandler}
            type="number"
            min={0.01}
            step={0.01}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2027-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={() => props.formVisibility(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
