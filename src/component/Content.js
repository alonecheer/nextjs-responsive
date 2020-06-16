import React from "react";
import { Layout, Breadcrumb, Carousel } from "antd";

const { Header, Content, Sider, Footer } = Layout;

import styled from "styled-components";
const StyledWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap");
  font-family: "Baloo Bhaina 2", cursive;
  max-width: 960px;
  margin: 0 auto;
  .menu-grid {
    display: grid;
    grid-template-columns: 255px 1fr;
  }
  .title h1 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
    color: #212529;
  }
  .menu-item1 {
    width: 31.25%;
    height: 27px;
    /*background: bisque;*/
    float: left;
    padding-left: 15px;
    padding-top: 5px;
  }
  .menu-item2 {
    width: 68.75%;
    height: 27px;
    /*background: burlywood;*/
    float: left;
  }
  /* button, input, optgroup, select, textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    width: 100%
} */
  input {
    border: 2px solid #212529;
    padding: 10px;
    border-radius: 25px;
    width: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  td {
    text-align: left;
    padding: 8px;
    font-size: 20px;
  }

  th {
    text-align: left;
    padding: 8px;
    font-size: 30px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  .sub-title {
    font-size: 30px;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .menu {
    font-size: 18px;
    padding-bottom: 15px;
    padding-top: 15px;
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
      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">1.รายละเอียด</div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารของ</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>


      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">2.รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน</div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="text" placeholder="text" />
      </div>

    </StyledWrapper>
  );
};
export default ContentComponent;
