import React, { useState } from "react";

import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import styles from "./Form.module.css";

export const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const amountInputHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateInputHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      name: enteredName,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.onFormSubmit(enteredData);

    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <Card>
      {!isEditing && <Button onClick={startEditing}>Add new expense</Button>}
      {isEditing && (
        <form className={styles.form} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="name"
            value={enteredName}
            onChange={nameInputHandler}
          />
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amountInputHandler}
          />
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateInputHandler}
          />
          <Button type="submit">Submit</Button>
          <Button onClick={stopEditing}>Cancel</Button>
        </form>
      )}
    </Card>
  );
};
