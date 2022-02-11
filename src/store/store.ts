import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import favoriteReducer from "./reducers/favoriteReducer";
import randomReducer from "./reducers/randomReducer";

export const rootReducer = combineReducers({
  favoriteReducer,
  randomReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
