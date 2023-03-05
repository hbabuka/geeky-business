import { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../..";

const setSearchInput = (payload: string) => {
  return {
    type: "SET_SEARCH_INPUT",
    payload,
  };
};

export const appendSearchInputData = (obj: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(setSearchInput(obj));
  };
};
