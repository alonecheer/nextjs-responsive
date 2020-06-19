import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Tag, Button,Dropdown , Menu,message } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Router from "next/router";
import styled from "styled-components";
const StyledWrapper = styled.div`
 max-width: 1200px;
  margin: 0 auto;
  background-color: #f0f2f5;
`;

const Index = () => {
  const [history, setHistoty] = useState([]);
  //console.log('data =',history)
  // const wholeArray = Object.keys(history).map((key) => history[key]);
  // console.log(wholeArray);
  const getForm001Bysid = async () => {
    var found = await axios.get(`http://localhost:3001/form001/6035512021`);
    //console.log('found = ', found.data)
    setHistoty(found.data);
  };
  useEffect(() => {
    getForm001Bysid();
  }, []);

  const handleMenuClick = (e,order_id) => {
    message.info('Click on menu item.');
    console.log('click', (e.key));
    console.log('click order_id', (order_id));
    if (e.key === '1'){
      return Router.push({
        pathname: "/pageview",
        query: { order_id: order_id },
      });}

    else if (e.key === '2'){
      return Router.push({
      pathname: "/pageedit",
      query: { order_id: order_id },
    });
    }
    
    else if (e.key === '3'){
      return Router.push({
      pathname: "/pageedit",
      query: { order_id: order_id },
    });
    }

    else {
      return Router.push({
        pathname: "/pageedit",
        query: { order_id: order_id },
      });
    }
  }
  const menu = (order_id) =>{
    return (<div>
      <Menu onClick={(e)=>{handleMenuClick(e,order_id)}}>
        <Menu.Item keys="1" defaultValue={order_id} icon={<UserOutlined />}>
          View {order_id}
        </Menu.Item>
        <Menu.Item keys="2" icon={<UserOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item keys="3" icon={<UserOutlined />}>
          Delete
        </Menu.Item>
        <Menu.Item keys="3" icon={<UserOutlined />}>
          PDF
        </Menu.Item>
      </Menu>
    </div>)
  }
    const columns = [
      {
        title: "ใบรายการที่",
        dataIndex: "order_id",
        key: "order_id",
        render: (text,record) => (<>
        <a style={{marginRight:"5px"}}>
          {text}</a>
          <Dropdown overlay={menu(record.order_id)}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
        </>),
        align: "center",
      },
      {
        title: "ผู้บันทึกรายการ",
        dataIndex: "sid",
        key: "sid",
        responsive: ["md"],
        align: "center",
      },
      {
        title: "วันที่บันทึกใบรายการ",
        dataIndex: "o_date",
        key: "o_date",
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ชื่อโครงการ",
        dataIndex: "o_projectname",
        key: "o_projectname",
        responsive: ["lg"],
      },
      {
        title: "สถานะ",
        render: (record) => {
          if(record.status_id.s_detail_en === 'Wait'){
            return <Tag color="#f50">รอการตรวจสอบ</Tag>
          }
          else if (record.status_id.s_detail_en === 'Pass'){
            return <Tag color="#87d068">ผ่าน</Tag>
          }
        },
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ประเภทใบรายการ",
        render: (record) => record.typeform.o_typedoc_name,
        responsive: ["lg"],
        align: "center",
      },
     
    ];
  return (
    <StyledWrapper>
      <Table
        columns={columns}
        dataSource={history}
        rowKey={(record) => record.order_id}
      />
    </StyledWrapper>
  );
};
export default Index;
