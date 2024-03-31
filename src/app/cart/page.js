"use client";
import React from "react";
import { remove } from "@/Redux/Cartslice";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Container>
      <h3>Cart page</h3>
      {cartitems.length < 1 && (
        <h2 style={{ textAlign: "center" }}>cart is empty</h2>
      )}
      {cartitems.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt="img" />
          <h5>{item.title}</h5>
          <h5>{item.price}</h5>
          <button className="btn" onClick={() => handleremove(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100vh;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  color: darkslateblue;
  background-color: white;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  .card {
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 5px;
    box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.4);
    background-color: white;
    img {
      width: 60%;
      aspect-ratio: 1/1;
    }
    .btn {
      width: 60%;
      padding: 8px 20px;
      background-color: darkslateblue;
      color: white;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Cart;
