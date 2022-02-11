import {
  FavoriteActionsType,
  UserDataIdType,
  UserDataType,
} from "../types/favorite";

export const setPersonage = (personage: UserDataType) => {
  return {
    type: FavoriteActionsType.addPersonage,
    payload: personage,
  };
};

export const removePersonage = (personId: UserDataIdType) => {
  return {
    type: FavoriteActionsType.removePersonage,
    payload: personId,
  };
};
