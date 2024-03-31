"use client";
import { add } from "@/Redux/Cartslice";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Homepage = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };

  const handleadd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleadd(product)}>
            Add to cart
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

export default Homepage;
