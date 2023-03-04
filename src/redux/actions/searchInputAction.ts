import { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../..";

const setSearchInput = (payload: PayloadAction<string>) => {
  return {
    type: "SET_SEARCH_INPUT",
    payload,
  };
};

export const appendSearchInputData = (obj: PayloadAction<string>) => {
  return (dispatch: AppDispatch) => {
    dispatch(setSearchInput(obj));
  };
};
