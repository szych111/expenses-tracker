import { Fragment } from "react";
import ReactDOM from "react-dom";

import { Card } from "./Card";
import { Button } from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onDismiss}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.onDismiss}>Dismiss</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onDismiss={props.onDismiss}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
