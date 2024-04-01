"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NavBar1 = () => {
  const cartitems = useSelector((state) => state.cart);
  const { navbar } = useSelector((state) => state.setting[0]);
  console.log(navbar);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {navbar == "NavBar2" ? (
        <Container style={{ backgroundColor: "black" }}>
          <div className="nav-logo">
            <Link
              href="/"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              BatchSystems
            </Link>
          </div>
          <div
            className="nav-menu-icon"
            onClick={() => {
              setOpenMenu(!openMenu);
              openMenu
                ? (document.querySelector(".nav-menu-open").style.left = "0")
                : (document.querySelector(".nav-menu-open").style.left =
                    "-1024px");
            }}>
            <IoMdMenu />
          </div>
          <div className="nav-menu-open">
            <Link
              href="/settings"
              className="nav-settings"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              Settings
            </Link>
            <br />
            <Link
              href="/cart"
              className="nav-cart"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              Cart <span>{cartitems.length}</span>
            </Link>
          </div>
          <div className="nav-menu">
            <div className="nav-settings">
              <Link href="/settings" onClick={() => setOpenMenu(!openMenu)}>
                Settings
              </Link>
            </div>
            <div className="nav-cart">
              {" "}
              <Link href="/cart">
                Cart <span>{cartitems.length}</span>
              </Link>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="nav-logo">
            <Link
              href="/"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              BatchSystems
            </Link>
          </div>
          <div
            className="nav-menu-icon"
            onClick={() => {
              setOpenMenu(!openMenu);
              openMenu
                ? (document.querySelector(".nav-menu-open").style.left = "0")
                : (document.querySelector(".nav-menu-open").style.left =
                    "-1024px");
            }}>
            <IoMdMenu />
          </div>
          <div className="nav-menu-open">
            <Link
              href="/settings"
              className="nav-settings"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              Settings
            </Link>
            <br />
            <Link
              href="/cart"
              className="nav-cart"
              onClick={() => {
                setOpenMenu(!openMenu);
                document.querySelector(".nav-menu-open").style.left = "-1024px";
              }}>
              Cart <span>{cartitems.length}</span>
            </Link>
          </div>
          <div className="nav-menu">
            <div className="nav-settings">
              <Link href="/settings" onClick={() => setOpenMenu(!openMenu)}>
                Settings
              </Link>
            </div>
            <div className="nav-cart">
              {" "}
              <Link href="/cart">
                Cart <span>{cartitems.length}</span>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  min-width: 100vw;
  background-color: darkslateblue;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  .nav-menu-icon {
    display: none;
  }
  .nav-menu-open {
    position: absolute;
    left: -1024px;
    top: 60px;
    z-index: 11;
    height: 100vh;
    background-color: white;
    color: darkslateblue;
    font-weight: 500;
    font-size: 18px;
    min-width: 100vw;
    padding: 40px 0;
    display: none;
    line-height: 40px;
    transition: all 500ms ease;
    text-align: center;
  }
  .nav-logo {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 18px;
    font-weight: 500;
  }
  @media screen and (max-width: 500px) {
    padding: 0 20px;
    .nav-menu-icon {
      display: block;
    }
    .nav-menu-open {
      display: block;
    }
    .nav-logo {
      font-family: "Poppins";
      font-weight: 600;
      font-size: 15px;
    }
    .nav-menu {
      display: none;
    }
  }
`;

export default NavBar1;
