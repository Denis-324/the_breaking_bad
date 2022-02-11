/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch } from "react-redux";
import { removePersonage, setPersonage } from "../../../store/actions/favorite";
import likeFill from "./img/likeFill.svg";
import like from "./img/like.svg";
import styles from "./peasonageImg.module.scss";

type PersonageImgTypeProps = {
  personImg: string | undefined;
  personId: number | any;
  personName: string | undefined;
  personFavorite: boolean;
  setPersonFavorite: React.Dispatch<React.SetStateAction<boolean>>;
};

const PersonageImg: React.FC<PersonageImgTypeProps> = (props) => {
  const { setPersonFavorite, personFavorite, personName, personImg, personId } =
    props;
  const dispatch = useDispatch();
  const setOrRemovePersonage = () => {
    if (personFavorite) {
      dispatch(removePersonage(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonage({
          [personId]: {
            img: personImg,
            name: personName,
          },
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <div className={styles.img_box}>
      <img className={styles.img} src={personImg} alt="img" />

      <img
        className={styles.img_heart}
        onClick={setOrRemovePersonage}
        src={personFavorite ? likeFill : like}
        alt="like"
      />
    </div>
  );
};

export default PersonageImg;
