import { React, useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [filterDate, setFilterDate] = useState("2022");
  const dateChangeHandler = (event) => {
    setFilterDate(event.target.value);
  };
  props.onSelectDate(filterDate);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dateChangeHandler} value={filterDate}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
