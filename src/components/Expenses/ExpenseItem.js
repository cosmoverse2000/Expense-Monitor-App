import React, { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.expenseTitle);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
