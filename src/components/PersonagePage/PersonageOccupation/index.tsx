/* eslint-disable react/no-array-index-key */
import React from "react";
import cn from "classnames";
import styles from "./personageOccupation.module.scss";

type PersonageOccupationTypeProps = {
  occupation: string[];
};

const PersonageOccupation: React.FC<PersonageOccupationTypeProps> = (props) => {
  const { occupation } = props;
  return (
    <div>
      <p className={cn(styles.text, styles.title)}>Occupation:</p>
      {occupation.map((item, index) => (
        <ul key={`${item}_${index}`}>
          <li className={styles.text}>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default PersonageOccupation;
