import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expensesMonthly = props.dataPoints.map((each) => {
    return each.value;
  });
  const maxExpensesMonthly = Math.max(...expensesMonthly);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            maxValue={maxExpensesMonthly}
            value={dataPoint.value}
          />
        );
      })}
    </div>
  );
};

export default Chart;
