/* eslint-disable camelcase */
import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";

import styles from "./characterList.module.scss";

type СharacterListPropsType = {
  character: {
    id?: number;
    name: string;
    img: string;
  }[];
};
const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 991 });
  return isTablet ? children : null;
};

const СharactersList: React.FC<СharacterListPropsType> = (props) => {
  const { character } = props;
  return (
    <div className={styles.container_grid}>
      <ul className={styles.container}>
        {character.map(({ name, img, id }) => (
          <>
            <Desktop>
              <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35}>
                <li className={styles.card} key={name}>
                  <Link to={`/characters/${id}`}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <div className={styles.box}>
                      <img className={styles.photo} src={img} alt={name} />
                    </div>
                    <div className={styles.description}>
                      <p>{name}</p>
                    </div>
                  </Link>
                </li>
              </Tilt>
            </Desktop>
            <Tablet>
              <li className={styles.card}>
                <Link to={`/characters/${id}`}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className={styles.box}>
                    <img className={styles.photo} src={img} alt={name} />
                  </div>
                  <div className={styles.description}>
                    <p>{name}</p>
                  </div>
                </Link>
              </li>
            </Tablet>
          </>
        ))}
      </ul>
    </div>
  );
};

export default СharactersList;
