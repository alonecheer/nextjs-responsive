import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  .container {
    max-width: 960px;
    margin: 0 auto;
    background-color: burlywood;
  }
`;
const Index = () => {
  useEffect(() => {}, []);

  return (
    <StyledWrapper>
      <div className="container">
      <div className="container">
        <div className="main">Main</div>
        <div className="menu1">Menu1</div>
      </div>
    </div>
    </StyledWrapper>
    
  );
};
export default Index;
