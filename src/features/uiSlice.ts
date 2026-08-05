import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  navOpen: boolean;
}

const initialState: UiState = {
  navOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNavOpen: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
  },
});

export const { setNavOpen } = uiSlice.actions;
export default uiSlice.reducer;