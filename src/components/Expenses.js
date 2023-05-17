import React, { useState } from "react";
import "./Expenses.css";

import Card from "./UI/Card";
import ExpensesFilter from "./Expenses/ExpensesFilter";
import ExpenseList from "./Expenses/ExpenseList";
import ExpenseChart from "./Expenses/ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filteredExpenses = props.expensesData.filter((each) => {
    return each.date.getFullYear() == filterYear;
  });

  const getSelectedYear = (year) => {
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectYearBind={filterYear}
          onSelectYear={getSelectedYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
