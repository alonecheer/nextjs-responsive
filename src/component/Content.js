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
  .menu-item2 input {
    margin-left: 15px;
  }
  @media screen and (max-width: 320px) {
    .menu-item1 {
      width: 100%;
      float: none;
    }
    .menu-item2 {
      width: 100%;
      float: none;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
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
     
      <div style={{ overflowX: "auto" }}>
      <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    <tr>
      <td>เอกสารของ</td>
      <td><input ></input></td>
    </tr>
    <tr>
      <td>เอกสารของ</td>
      <td><input ></input></td>
    </tr>
  </table>
      </div>
    </StyledWrapper>
  );
};
export default ContentComponent;
