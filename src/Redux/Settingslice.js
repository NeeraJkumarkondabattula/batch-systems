"use client";
import { createSlice } from "@reduxjs/toolkit";
const settingSlice = createSlice({
  name: "Setting",
  initialState: [
    {
      navbar: "Navbar1",
      productCard: "productCard1",
      view: "viewAll",
    },
  ],
  reducers: {
    chnageNavbar(state, action) {
      state[0].navbar = action.payload;
    },
  },
});

export const { chnageNavbar } = settingSlice.actions;
export default settingSlice.reducer;
