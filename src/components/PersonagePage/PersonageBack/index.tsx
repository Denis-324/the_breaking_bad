import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import styles from "./personageBack.module.scss";

const PersonageBack = () => {
  const nextNavigate = useNavigate();
  const onBack = () => nextNavigate(-1);
  return (
    <div className={styles.flex}>
      <Link to="/" onClick={onBack}>
        <Button text="назад" />
      </Link>
    </div>
  );
};

export default PersonageBack;
