import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailsReducer } from "./detailsReducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});
