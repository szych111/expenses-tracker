import { useState } from "react";

import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [error, setError] = useState();

  const nameInputHandler = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const emailInputHandler = (e) => {
    setUseremail(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || useremail.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and e-mail",
      });
      return;
    }
    props.onAddUser(username, useremail);
    setUsername("");
    setUseremail("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input type="text" value={username} onChange={nameInputHandler} />
          <label htmlFor="useremail">E-mail</label>
          <input type="email" value={useremail} onChange={emailInputHandler} />
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </div>
  );
};
