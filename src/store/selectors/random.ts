/* eslint-disable import/prefer-default-export */
import { RandomReducerType } from "../types/random";

export const getRandomData = (state: RandomReducerType) =>
  state.randomReducer.random;
