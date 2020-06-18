import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table } from 'antd';
import styled from "styled-components";
const StyledWrapper = styled.div`

`;
const Index = () => {
  const [history, setHistoty] = useState([])
  console.log('data =',history)
  const wholeArray = Object.keys(history).map(key => history[key]);
  console.log(wholeArray);
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/6035512021`
    )
    //console.log('found = ', found.data)
    setHistoty(found.data)
    
    }
  useEffect(() => {
    getForm001Bysid()
  }, [])
  const columns = [
    {
      title: 'Order_id',
      dataIndex: 'order_id',
      key: 'order_id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'o_date',
      dataIndex: 'o_date',
      key: 'o_date',
      responsive: ['md'],
    },
    {
      title: 'o_projectname',
      dataIndex: 'o_projectname',
      key: 'o_projectname',
      responsive: ['lg'],
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    
  ];
  return (
    <StyledWrapper>
        <Table columns={columns} dataSource={history} />
    </StyledWrapper>
  );
};
export default Index;
