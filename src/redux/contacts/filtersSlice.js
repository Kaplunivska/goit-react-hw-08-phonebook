import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setValueFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
