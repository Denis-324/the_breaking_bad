import React from "react";
import styles from "./notFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.flex}>
      <p className={styles.text}>Страница не обнаружна</p>
    </div>
  );
};

export default NotFoundPage;
