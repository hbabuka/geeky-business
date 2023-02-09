const initialState = {
  value: "",
};

export const searchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
