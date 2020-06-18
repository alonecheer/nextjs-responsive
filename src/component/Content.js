import React from "react";
import { Layout, Breadcrumb, Carousel, Tag, Divider } from "antd";

const { Header, Content, Sider, Footer } = Layout;

import styled from "styled-components";
const StyledWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap");
  font-family: "Baloo Bhaina 2", cursive;
  max-width: 960px;
  margin: 0 auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    font-size: 15px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  input {
    border: 1px solid black;
    /*padding: 10px;*/
    /*width: 100%;*/
    /*background-color:#f0f2f5;*/
  }

  input:focus {
    outline: none;
  }
`;

const ContentComponent = () => {
  return (
    <StyledWrapper>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>ลำดับ</th>
            <th>รายการ</th>
            <th>จำนวน</th>
            <th>หน่วย</th>
            <th>ราคา/หน่วย</th>
          </tr>
          <tr>
            <td>
              1
              <input
                name="sid"
                value={username}
                disabled={true}
                type="hidden"
                ref={register}
              ></input>
              <input
                name="order_id"
                value={order_id}
                disabled={true}
                type="hidden"
                ref={register}
              ></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_detail_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input ref={register} type="text" name="l_detail_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input ref={register} type="text" name="l_detail_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input ref={register} type="text" name="l_detail_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <input ref={register} type="text" name="l_detail_5"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_5"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_5"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
        </table>
      </div>
    </StyledWrapper>
  );
};
export default ContentComponent;
