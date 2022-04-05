import React, { useState } from "react";

import { Form } from "./Form/Form";
import { Expenses } from "./Expenses/Expenses";

import "./App.css";

const DUMMY_EXPENSES = [
  { name: "wine", amount: 4.3, date: "2019-04-15" },
  { name: "pencils", amount: 0.55, date: "2022-10-01" },
  { name: "marmelade", amount: 1.29, date: "2019-03-15" },
  { name: "book", amount: 5.55, date: "2022-12-01" },
  { name: "pencils", amount: 0.55, date: "2019-08-19" },
  { name: "pencils", amount: 0.55, date: "2020-10-02" },
  { name: "pencils", amount: 0.55, date: "2021-05-02" },
  { name: "pencils", amount: 0.55, date: "2020-08-14" },
  { name: "rhubarb", amount: 0.85, date: "2020-01-02" },
  { name: "parrot", amount: 325, date: "2021-05-02" },
  { name: "ink", amount: 8.95, date: "2020-08-14" },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onFormSubmit = (data) => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    console.log(expenses);
  };

  return (
    <div>
      <Form onFormSubmit={onFormSubmit} />
      <Expenses items={expenses} />
    </div>
  );
}
