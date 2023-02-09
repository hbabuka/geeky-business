import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailsReducer } from "./detailsReducer";
import { searchInputReducer } from "./searchInputReducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
  searchInput: searchInputReducer,
});
