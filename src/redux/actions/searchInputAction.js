import axios from "axios";

const setSearchInput = (payload) => {
  return {
    type: "SET_SEARCH_INPUT",
    payload,
  };
};

export const appendSearchInputData = (obj) => {
  return (dispatch) => {
    dispatch(setSearchInput(obj));
  };
};
