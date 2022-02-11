/* eslint-disable default-param-last */
import {
  ActionsType,
  RandomActionsType,
  RandomDataType,
} from "../types/random";

const initialState: RandomDataType = {
  random: [],
};

const randomReducer = (
  state = initialState,
  action: ActionsType
): RandomDataType => {
  switch (action.type) {
    case RandomActionsType.fetchRandomsData:
      return {
        ...state,
        random: action.payload,
      };
    default:
      return state;
  }
};

export default randomReducer;
