import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div``;

const Index = () => {
  return (
    <StyledWrapper>
      <title>Homepage</title>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <h1>Psu</h1>
              <span>Procurement system</span>
            </div>
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
        </nav>
      </header>
      <section className="content">
        <div className="container">
          <div className="content-heading">
            <img src="/static/images/bg.jpg" />
          </div>
        </div>
      </section>
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
    </StyledWrapper>
  );
};
export default Index;
