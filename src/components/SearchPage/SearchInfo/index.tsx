import React from "react";
import { Link } from "react-router-dom";
import styles from "./searchInfo.module.scss";

type SearchInfoPropTypes = {
  people: never[];
};

const SearchInfo: React.FC<SearchInfoPropTypes> = (props) => {
  const { people } = props;
  return (
    <div>
      {people.length ? (
        <ul className={styles.grid}>
          {people.map(({ name, img, id }) => (
            <li className={styles.box} key={id}>
              <Link to={`/characters/${id}`}>
                <img className={styles.img} src={img} alt={name} />
                <div className={styles.text}>{name}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.flex}>
          <p className={styles.text_notfound}>Нет результатов</p>
        </div>
      )}
    </div>
  );
};

export default SearchInfo;
