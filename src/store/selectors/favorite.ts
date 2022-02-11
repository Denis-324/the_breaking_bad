/* eslint-disable import/prefer-default-export */
import { FavoriteReducerType } from "../types/favorite";

export const getUserData = (state: FavoriteReducerType) =>
  state.favoriteReducer;
