import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  pageItems: [],
};

const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageItems: (state, action) => {
      state.pageItems = action.payload;
    },
    firstPage: (state) => {
      state.currentPage = 1;
    },
    previousPage: (state) => {
      state.currentPage--;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    lastPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const paginationAction = PaginationSlice.actions;

export default PaginationSlice.reducer;
