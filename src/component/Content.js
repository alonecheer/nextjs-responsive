import React from "react";
import { Layout, Breadcrumb, Carousel } from "antd";

const { Header, Content, Sider, Footer } = Layout;

import styled from "styled-components";
const StyledWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  .menu-grid {
    display: grid;
    grid-template-columns: 255px 1fr;
  }
  .title h1 {
    font-size: 30px;
    text-align: center;
  }
  .menu-item1 {
    width: 31.25%;
    height: 100px;
    background: bisque;
    float: left;
  }
  .menu-item2 {
    width: 68.75%;
    height: 100px;
    background: burlywood;
    float: left;
  }
`;

const ContentComponent = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <h1>
          แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต <br></br>{" "}
          กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
        </h1>
      </div>
      <div>
        <h2>1. รายละเอียด</h2>
      </div>

      <div className="menu-item1">
        <div>
          <span>เอกสารที่ มอ.696/</span>{" "}
        </div>
        <div>
          <span>ลงวันที่</span>{" "}
        </div>
      </div>
      <div className="menu-item2"></div>
      <div>
        <span>
          ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
        </span>{" "}
      </div>
      <div>
        <span>ชื่อโครงการ (ถ้ามี)</span>{" "}
      </div>
      <div>
        <span>วันที่ต้องใช้พัสดุ</span>{" "}
      </div>
    </StyledWrapper>
  );
};
export default ContentComponent;
