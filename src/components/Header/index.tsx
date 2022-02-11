import React from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/">
            <span />
            <span />
            <span />
            <span />
            Главная
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/characters?limit=9&offset=0">
            <span />
            <span />
            <span />
            <span />
            Персонажи
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/random">
            <span />
            <span />
            <span />
            <span />
            Random
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/search">
            <span />
            <span />
            <span />
            <span />
            Поиск
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </nav>
  );
};

export default Header;
