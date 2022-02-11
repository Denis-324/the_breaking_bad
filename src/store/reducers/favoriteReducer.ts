/* eslint-disable default-param-last */
import { omit } from "lodash";
import {
  UserDataType,
  ActionsType,
  FavoriteActionsType,
} from "../types/favorite";

const initialState: UserDataType = {};
const favoriteReducer = (
  state = initialState,
  action: ActionsType
): UserDataType => {
  switch (action.type) {
    case FavoriteActionsType.addPersonage:
      return {
        ...state,
        ...action.payload,
      };
    case FavoriteActionsType.removePersonage:
      // @ts-ignore
      return omit(state, [action.payload]);
    default:
      return state;
  }
};

export default favoriteReducer;
