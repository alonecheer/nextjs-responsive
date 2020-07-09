import React, { useEffect, useState } from "react";
import '../public/static/pages/login.css'
import styled from "styled-components";
const StyledWrapper = styled.div`
  
`;
const Login = () => {
  return (
    <StyledWrapper>
      <div className="container-login100">
        <div className="wrap-login100">

          <div class="login100-pic js-tilt" data-tilt>
            <img src="static/images/img-01.png" alt="IMG"></img>
          </div>
          
          
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Login;
