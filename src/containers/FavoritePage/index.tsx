import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import СharactersList from "../../components/СharactersPage/СharactersList";
import { getUserData } from "../../store/selectors/favorite";
import styles from "./favoritePage.module.scss";

type resType = {
  id: string;
  name: string | undefined;
  img: string | undefined;
}[];

const FavoritePage = () => {
  const [character, setCharacter] = useState([] as any);
  const storeInfo = useSelector(getUserData);

  useEffect(() => {
    const arr = Object.entries(storeInfo);
    if (arr.length) {
      const res: resType = arr.map((item) => {
        return {
          id: item[0],
          name: item[1].name,
          img: item[1].img,
        };
      });
      setCharacter(res);
    }
  }, []);
  return (
    <div>
      {character.length ? (
        <СharactersList character={character} />
      ) : (
        <div className={styles.flex}>
          <div className={styles.text}>У вас нет фаворитов</div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
