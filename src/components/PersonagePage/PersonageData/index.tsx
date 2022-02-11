import React from "react";
import styles from "./personageInfo.module.scss";

type PersonageDataPropTypes = {
  personData: {
    topic: string;
    data: string;
  }[];
};

const PersonageData: React.FC<PersonageDataPropTypes> = (props) => {
  const { personData } = props;
  return (
    <ul>
      {personData.map(
        ({ topic, data }) =>
          data && (
            <li key={topic}>
              <span className={styles.text}>
                {topic}: {data}
              </span>
            </li>
          )
      )}
    </ul>
  );
};

export default PersonageData;
