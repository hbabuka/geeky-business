const initialState = {
  popular: [],
  latest: [],
  upcoming: [],
  topIndie: [],
  topMultiplayer: [],
  searched: [],
  gamesAreLoading: true,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        latest: action.payload.new,
        topIndie: action.payload.topIndie,
        topMultiplayer: action.payload.topMultiplayer,
        gamesAreLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "LOADING_GAMES":
      return {
        ...state,
        gamesAreLoading: true,
      };
    default:
      return { ...state };
  }
};
