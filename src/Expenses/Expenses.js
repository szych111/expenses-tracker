import React, { useState } from "react";

import { Filter } from "./Filter";
import { Card } from "../UI/Card";
import styles from "./Expenses.module.css";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((i) => {
    return new Date(i.date).getFullYear().toString() === selectedYear;
  });

  return (
    <Card>
      <h2>Expenses</h2>
      <Filter
        selectedYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((item) => (
        <div key={Math.random()} className={styles.expense}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.amount}>{item.amount}</p>
          <p className={styles.date}>{item.date}</p>
        </div>
      ))}
      <ExpensesChart expenses={filteredExpenses} />
    </Card>
  );
};
