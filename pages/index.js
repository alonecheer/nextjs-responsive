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
  const wholeArray = Object.keys(history).map((key) => history[key]);
  console.log(wholeArray);
  const getForm001Bysid = async () => {
    var found = await axios.get(`http://localhost:3001/form001/6035512021`);
    //console.log('found = ', found.data)
    setHistoty(found.data);
  };
  useEffect(() => {
    getForm001Bysid();
  }, []);
  // const handleMenuClick = (order_id,key) => {
  //   message.info(`Click on menu item. ${order_id}`);
  //   console.log('click', order_id);
    
  // }
  const handleMenuClick = (e,order_id) => {
    message.info('Click on menu item.');
    console.log('click', typeof(e.key));
    console.log('click order_id', typeof(order_id));
    if (e.key === '1')
      return Router.push({
        pathname: "/input",
        query: { order_id: order_id },
      });
    
    else {
      return console.log('no')
    }
      return console.log('finish')
  }
  const menu = (order_id) =>{
    return (<div>
      <Menu onClick={(e)=>{handleMenuClick(e,order_id)}}>
        <Menu.Item key="1" defaultValue={order_id} icon={<UserOutlined />}>
          1st menu item {order_id}
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          3rd item
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
        render: (record) => record.status_id.s_detail_en,
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ประเภทใบรายการ",
        render: (record) => record.typeform.o_typedoc_name,
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ดำเนินการ",
        render: (record) => (
          <Space size="small">
            <div>
              <Button style={{marginRight: '5px'}} type="primary">primary</Button>
              <Button style={{marginRight: '5px'}} type="ghost">ghost</Button>
              <Button style={{marginRight: '5px'}} type="dashed">dashed</Button>
              <Button style={{marginRight: '5px'}} type="danger">danger</Button>
            </div>
          </Space>
        ),
        responsive: ["md"],
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
