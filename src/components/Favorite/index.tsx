import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "./img/likeFill.svg";
import styles from "./favorite.module.scss";
import { getUserData } from "../../store/selectors/favorite";

const Favorite = () => {
  const [count, setCount] = useState<number>();
  const storeInfo = useSelector(getUserData);
  useEffect(() => {
    const { length } = Object.keys(storeInfo);
    setCount(length);
  });
  return (
    <Link className={styles.a} to="/favorites">
      <span className={styles.count}>{count}</span>
      <img className={styles.img} src={icon} alt="like" />
    </Link>
  );
};

export default Favorite;
