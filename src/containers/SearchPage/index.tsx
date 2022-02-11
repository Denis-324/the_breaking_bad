/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import SearchInfo from "../../components/SearchPage/SearchInfo";
import { API_SEARCH } from "../../constants/api";
import { getApi } from "../../utils/network";
import Input from "../../components/SearchPage/Input";
import ErrorMessage from "../../components/ErrorMessage";

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

const SearchPage = () => {
  const [errApi, setErrAip] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [people, setPeople] = useState([]);
  const getData = async (item: string) => {
    const res = await getApi(API_SEARCH + item);
    if (res) {
      const charasterList = res.map((element: charasterListType) => {
        return {
          name: element.name,
          img: element.img,
          id: element.char_id,
        };
      });
      setPeople(charasterList);
      setErrAip(false);
    } else {
      setErrAip(true);
    }
  };
  useEffect(() => {
    getData("");
  }, []);
  const inputChange = (value: string) => {
    setInputValue(value);
    getData(value);
  };
  return (
    <div>
      {errApi ? (
        <ErrorMessage />
      ) : (
        <>
          <Input
            inputValue={inputValue}
            inputChange={inputChange}
            placeholder="поиск персонажей"
          />
          <SearchInfo people={people} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
