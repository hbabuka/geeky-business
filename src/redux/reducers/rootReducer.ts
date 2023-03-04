import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailsReducer } from "./detailsReducer";
import { searchInputReducer } from "./searchInputReducer";

export const reducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
  searchInput: searchInputReducer,
});
