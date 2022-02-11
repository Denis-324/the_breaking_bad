/* eslint-disable camelcase */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Navigation from "../../components/СharactersPage/Navigation";
import СharactersList from "../../components/СharactersPage/СharactersList";
import { API_CHARACTERS } from "../../constants/api";
import { getApi } from "../../utils/network";

type charasterListType = {
  appearance: number[] | [];
  better_call_saul_appearance: string[] | [];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: string[] | [];
  portrayed: string;
  status: string;
};

const СharactersPage = () => {
  const [character, setCharacter] = useState([]);
  const [errApi, setErrAip] = useState(false);
  const [query, setQuery] = useState<number>(0);
  const getDataApi = async (url: string) => {
    const res = await getApi(url);
    if (res) {
      const charasterList = res.map((element: charasterListType) => {
        return {
          name: element.name,
          img: element.img,
          id: element.char_id,
        };
      });
      setCharacter(charasterList);
      setErrAip(false);
    } else {
      setErrAip(true);
    }
  };
  useEffect(() => {
    getDataApi(API_CHARACTERS + query);
  }, [query]);
  return (
    <div>
      {errApi ? (
        <ErrorMessage />
      ) : (
        <div>
          <Navigation query={query} setQuery={setQuery} />
          {character && <СharactersList character={character} />}
        </div>
      )}
    </div>
  );
};

export default СharactersPage;
