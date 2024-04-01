"use client";
import { createSlice } from "@reduxjs/toolkit";
const settingSlice = createSlice({
  name: "Setting",
  initialState: [
    {
      navbar: "NavBar1",
      productCard: "ProductCard1",
      view: "viewAll",
    },
  ],
  reducers: {
    chnageNavbar(state, action) {
      state[0].navbar = action.payload;
    },
    changeProductCard(state, action) {
      state[0].productCard = action.payload;
    },
  },
});

export const { chnageNavbar, changeProductCard } = settingSlice.actions;
export default settingSlice.reducer;
