/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import PersonageBack from "../../components/PersonagePage/PersonageBack";
import PersonageData from "../../components/PersonagePage/PersonageData";
import PersonageImg from "../../components/PersonagePage/PersonageImg";
import PersonageOccupation from "../../components/PersonagePage/PersonageOccupation";
import { API_PERSONAGE } from "../../constants/api";
import { getUserData } from "../../store/selectors/favorite";
import { getApi } from "../../utils/network";
import styles from "./personagePage.module.scss";

type personDataType = {
  topic: string;
  data: string;
}[];

type idType = {
  id?: number | any;
};

const PersonagePage = () => {
  const [personId, setPersonId] = useState<number>();
  const [personData, setPersonData] = useState<personDataType>();
  const [personImg, setPersonImg] = useState<string>();
  const [personName, setPersonName] = useState<string>();
  const [errApi, setErrAip] = useState(false);
  const [occupation, setOccupation] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeInfo = useSelector(getUserData);
  const { id }: idType = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApi(`${API_PERSONAGE}/${id}/`);
      setPersonId(id);
      storeInfo[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      if (res) {
        setPersonData([
          { topic: "Name", data: res[0].name },
          { topic: "Nick Name", data: res[0].nickname },
          { topic: "Birthday", data: res[0].birthday },
          { topic: "Status", data: res[0].status },
          { topic: "Actor", data: res[0].portrayed },
        ]);
        setPersonImg(res[0].img);
        setPersonName(res[0].name);
        setErrAip(false);
        res[0].occupation && setOccupation(res[0].occupation);
      } else {
        setErrAip(true);
      }
    })();
  }, []);
  return (
    <div>
      <PersonageBack />
      {errApi ? (
        <ErrorMessage />
      ) : (
        <div className={styles.container}>
          <div className={styles.grid}>
            <PersonageImg
              setPersonFavorite={setPersonFavorite}
              personFavorite={personFavorite}
              personName={personName}
              personId={personId}
              personImg={personImg}
            />
            <div>
              {personData && <PersonageData personData={personData} />}
              {occupation && <PersonageOccupation occupation={occupation} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonagePage;
