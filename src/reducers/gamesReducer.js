import { useDispatch } from "react-redux";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

// Action creator
const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};
// useDispatch({ type: "FETCH_GAMES" });

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
