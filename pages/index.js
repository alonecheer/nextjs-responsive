import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* ------------------------------------ Start header  ------------------------------------*/
  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  header {
    width: 100%;
    height: 120px;
    background-color: #01273c;
    border-top: 5px solid #40aed7;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 225px 1fr;
  }
  .logo {
    color: white;
    margin-top: 20px;
  }
  h1 {
    color: white;
  }
  .logo h1 {
    font-size: 28px;
    text-transform: uppercase;
  }
  .logo span {
    font-size: 12px;
  }
  ul.menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 7%;
  }
  ul.menu li {
    text-decoration: none;
    list-style: none;
  }
  ul.menu li a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    transition: .3 ease-ease-in-out;
    padding: 5px 10px;
  }
  ul.menu li a:hover{
    background: #40aed7;
    padding: 5px 10px;
    border-radius: 5px;
  }

  /* ------------------------------------ End header  ------------------------------------*/

  /* ------------------------------------ Start section  ------------------------------------*/

  /* ------------------------------------ End section  ------------------------------------*/
`;

const Index = () => {
  return (
    <StyledWrapper>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <header>
        <nav>
          <div className="container">
            <div className="nav-grid">
              <div className="logo">
                <h1>Psu</h1>
                <span>Procurement system</span>
              </div>
              <div className="fr">
                <ul className="menu">
                  <li>
                    <a href="#">Add cart1</a>
                  </li>
                  <li>
                    <a href="#">Add cart1</a>
                  </li>
                  <li>
                    <a href="#">profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="content-heading">
            <img src="/static/images/bg.jpg" />
          </div>
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
      <footer>
        <div className="copyright">
          <div className="container">
            <div className="copyright-grid">
              <div className="copytext">
                <p>Copyright © 2020 Jetnipat - All Rights Reserved</p>
              </div>
              <div className="creadit">
                <p>ccnp</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*------------------------------------ End Footer ------------------------------------*/}
    </StyledWrapper>
  );
};
export default Index;
