import React from "react";
import styles from "./button.module.scss";

type ButtonTypeProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean | undefined;
  text: string;
};

const Button: React.FC<ButtonTypeProps> = (props) => {
  const { onClick, disabled, text } = props;
  return (
    <button
      className={styles.btn}
      type="button"
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
