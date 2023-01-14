const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
