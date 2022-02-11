import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import styles from "./navigatin.module.scss";

type NavigationPropsType = {
  query: number;
  setQuery: React.Dispatch<React.SetStateAction<number>>;
};

const Navigation: React.FC<NavigationPropsType> = (props) => {
  const { query, setQuery } = props;
  const handlerPrev = () => {
    setQuery(query + 9);
  };
  const handlerNext = () => {
    setQuery(query - 9);
  };
  return (
    <div className={styles.navigation_box}>
      <Link className={styles.btn} to={`/characters?limit=9&offset=${query}`}>
        <Button text="prev" disabled={query <= 0} onClick={handlerNext} />
      </Link>
      <Link className={styles.btn} to={`/characters?limit=9&offset=${query}`}>
        <Button text="next" disabled={query >= 54} onClick={handlerPrev} />
      </Link>
    </div>
  );
};

export default Navigation;
