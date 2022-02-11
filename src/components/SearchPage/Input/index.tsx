/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import cn from "classnames";
import styles from "./input.module.scss";
import clouse from "./img/close.png";

type InputPropsInput = {
  inputValue: string;
  inputChange: (value: string) => void;
  placeholder: string;
};

const Input: React.FC<InputPropsInput> = (props) => {
  const { inputValue, inputChange, placeholder } = props;
  return (
    <div className={styles.flex}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={inputValue}
        type="text"
        onChange={(e) => inputChange(e.target.value)}
      />
      <img
        src={clouse}
        alt="clouse"
        onClick={() => inputValue && inputChange("")}
        className={cn(styles.clear, !inputValue && styles.disabled)}
      />
    </div>
  );
};

export default Input;
