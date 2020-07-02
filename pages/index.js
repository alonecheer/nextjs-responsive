import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f0f2f5;
`;

const Index = () => {
  return (
  <StyledWrapper>
    <title>Homepage</title>
    <header>
      <div className="nav">
        <ul>
          <li className="profile"><a href="#">ผู้ใช้งาน</a>
          <ul>
            <li><a href="#">ข้อมูลส่วนตัว</a></li>
            <li><a href="#">ออกจากระบบ</a></li>
          </ul>
          </li>
          <li className="add001"><a href="#">Add cart001</a></li>
        </ul>
      </div>
    </header>
  </StyledWrapper>
  );
};
export default Index;
