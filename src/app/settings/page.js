"use client";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { chnageNavbar } from "@/Redux/Settingslice";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(chnageNavbar(document.querySelector("#navBarVariant").value));
    redirect("/");
  };

  return (
    <Container>
      <h1>Settings</h1>
      <form id="catalogSettingsForm" onSubmit={handleSubmit}>
        <h2>Catalog Settings</h2>
        <label for="navBarVariant">Navigation Bar Variant:</label>
        <select id="navBarVariant">
          <option value="NavBar1">NavBar1</option>
          <option value="NavBar2">NavBar2</option>
        </select>

        <label for="productCardVariant">Product Card Variant:</label>
        <select id="productCardVariant">
          <option value="ProductCard1">ProductCard1</option>
          <option value="ProductCard2">ProductCard2</option>
        </select>
        <label for="displayView">Display View:</label>
        <select id="displayView">
          <option value="view_all">View All</option>
          <option value="carousel">Carousel</option>
        </select>

        <button type="submit">Apply Settings</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: white;
  color: darkslateblue;
  box-sizing: border-box;
  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 500;
    }
    select {
      height: 35px;
      outline: none;
      background-color: white;
      color: darkslateblue;
      padding: 5px;
    }
    button {
      height: 35px;
      outline: none;
      background-color: darkslateblue;
      color: white;
      padding: 5px;
    }
  }
`;

export default Settings;
