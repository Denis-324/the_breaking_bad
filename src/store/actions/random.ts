/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { Dispatch } from "redux";
import { API_RANDOM } from "../../constants/api";
import { getApi } from "../../utils/network";

import {
  FetchRandomDataActionType,
  RandomActionsType,
  randomType,
} from "../types/random";

export const fetchRandomDataAction = () => {
  return async (dispatch: Dispatch<FetchRandomDataActionType>) => {
    const res = await getApi(API_RANDOM);
    const data = res.map((element: randomType) => {
      return {
        name: element.name,
        img: element.img,
        id: element.char_id,
      };
    });
    dispatch({
      type: RandomActionsType.fetchRandomsData,
      payload: data,
    });
  };
};
