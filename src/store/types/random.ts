/* eslint-disable camelcase */
/* eslint-disable no-shadow */
export enum RandomActionsType {
  fetchRandomsData = "FETCH_RANDOM_DATA",
}

export type RandomReducerType = {
  randomReducer: RandomDataType;
};

export type RandomDataType = {
  random: randomType[];
};

export type randomType = {
  char_id?: number;
  img: string;
  name: string;
};

export type FetchRandomDataActionType = {
  type: RandomActionsType.fetchRandomsData;
  payload: randomType[];
};

export type ActionsType = FetchRandomDataActionType;
