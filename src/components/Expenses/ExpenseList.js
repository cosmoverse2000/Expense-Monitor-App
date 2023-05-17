import React from "react";

import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback "> Found No Expenses.</h2>;
  }
  //   console.log(props.items);

  return (
    <ul className="expenses-list">
      {props.items.map((each) => {
        return (
          <ExpenseItem
            key={each.id}
            expenseDate={each.date}
            expenseTitle={each.title}
            expenseAmount={each.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
