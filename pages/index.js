import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table } from 'antd';
import styled from "styled-components";
const StyledWrapper = styled.div`

`;
const Index = () => {
  const [history, setHistoty] = useState([])
  //console.log('data =',history)
  const wholeArray = Object.keys(history).map((key => history[key]));
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
      title: 'ใบรายการที่',
      dataIndex: 'order_id',
      key: 'order_id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'ผู้บันทึกรายการ',
      dataIndex: 'sid',
      key: 'sid',
      responsive: ['md'],
    },
    {
      title: 'วันที่บันทึกใบรายการ',
      dataIndex: 'o_date',
      key: 'o_date',
      responsive: ['lg'],
    },
    {
      title: 'ชื่อโครงการ',
      dataIndex: 'o_projectname',
      key: 'o_projectname',
      responsive: ['lg'],
    },
    {
      title: 'สถานะ',
      render: (record) => record.status_id.s_detail_en,
      responsive: ['lg'],
    },
    {
      title: 'ประเภทใบรายการ',
      render: (record) => record.typeform.o_typedoc_name,
      responsive: ['lg'],
    },
  ];
  

  return (
    <StyledWrapper>
        <Table columns={columns} dataSource={history} key={history.length} />
    </StyledWrapper>
  );
};
export default Index;
