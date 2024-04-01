"use client";
import { add } from "@/Redux/Cartslice";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Homepage = () => {
  const [products, setproducts] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const dispatch = useDispatch();

  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setCarousel(data.slice(0, 5));
    setproducts(data);
  };

  const handleadd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getproducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              height: "300px",
            }}>
            <img
              src={product.image}
              alt="img"
              width={200}
              height={200}
              style={{ aspectRatio: "1 / 1 " }}
            />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              style={{
                width: "60%",
                padding: "8px 20px",
                backgroundColor: "darkslateblue",
                color: "white",
              }}
              onClick={() => handleadd(product)}>
              Add to cart
            </button>
          </div>
        ))}
      </Carousel>

      <Container>
        {products.map((product, index) => (
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
    </div>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100vw;
  height: auto;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  background-color: white;
  color: darkslateblue;
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
