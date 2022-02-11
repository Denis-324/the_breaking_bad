/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum FavoriteActionsType {
  addPersonage = "ADD_PERSONAGE",
  removePersonage = "REMOVE_PERSONAGE",
}

export type FavoriteReducerType = {
  favoriteReducer: UserDataType;
};

export type UserDataType = {
  [personId: number]: {
    name: string | undefined;
    img: string | undefined;
  };
};

export type UserDataIdType = {
  [personId: number]: UserDataType;
};

type FavoriAddteDataActionsType = {
  type: FavoriteActionsType.addPersonage;
  payload: UserDataType;
};

type FavoriRemoveteDataActionsType = {
  type: FavoriteActionsType.removePersonage;
  payload: UserDataType;
};

export type ActionsType =
  | FavoriAddteDataActionsType
  | FavoriRemoveteDataActionsType;
