interface SearchInputStateModel {
  value: string;
}

const initialState: SearchInputStateModel = {
  value: "",
};

export const searchInputReducer = (state = initialState, action: any) => {
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
