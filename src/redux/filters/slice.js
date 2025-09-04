import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFilter } from "./selectors";

export const useFilter = () => useSelector(selectFilter);

const filterSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
