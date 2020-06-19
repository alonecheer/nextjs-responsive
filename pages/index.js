import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Tag, Button,Dropdown , Menu,message } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
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
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const menu = () =>{
    return (<div>
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          1st menu item
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
        render: (text) => (<>
        <a>
          {text}
          <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
        </a></>),
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
