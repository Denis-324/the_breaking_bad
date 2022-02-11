import React from "react";
import styles from "./errorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.flex}>
      <p className={styles.text}>Невозможно отобразить данные</p>
    </div>
  );
};

export default ErrorMessage;
