import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f0f2f5;
  .nav ul{
    list-style: none;
    background-color: #01273c;
    text-align: right;
    padding: 0;
    margin: 0;
    
  }
  .nav ul li {
    font-size: 1.2em;
  }
  .nav li a{
    font-size: 1.2em;
    line-height: 40px;
    text-align: left;
  }
  .nav a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding-left: 15px;
    border-bottom: 1px solid #888;
    transition: .3s;
  }
  .nav a:hover{
    background-color: #005f5f;
  }
  .nav li li {
    font-size: .8em;
  }
  .container img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /* style menu for larger screen*/
  @media screen and (min-width: 650px){
    .nav li {
      width: 130px;
      border-bottom: none;
      height: 50px;
      line-height: 1.4em;
      display: inline-block;
      margin-right: -4px;
    }
    .nav a{
      border-bottom: none;
    }

    .nav  ul  li {
      text-align: center;
    }
    .nav > ul > li > a {
      padding-left: 0;
      text-align: center;
    }
    .nav li ul {
      position: absolute;
      display: none;
      width: inherit;
    }
    .nav li:hover ul {
      display: block;
    }
    .nav li ul li{
      display: block;
    }
    
  }

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
          <li className="aboutme"><a href="#">ติดต่อเรา</a></li>
          <li className="add001"><a href="#">Add cart001</a></li>
          <li className="add002"><a href="#">Add cart002</a></li>
        </ul>
      </div>
    </header>
    <section>
      <div className="container">
      <img src="/static/images/bg.jpg"/>
      </div>
    </section>
  </StyledWrapper>
  );
};
export default Index;
