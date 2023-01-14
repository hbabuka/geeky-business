import { useDispatch } from "react-redux";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.new,
      };
    default:
      return { ...state };
  }
};
