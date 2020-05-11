import React , {useState} from 'react'
import Head from 'next/head'
import { Layout, Menu , PageHeader, Tabs, Button, Statistic, Descriptions} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined,  MenuUnfoldOutlined,
    MenuFoldOutlined, } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

import styled from 'styled-components'
const StyledWrapper = styled.div`
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
`
const HomePage = () => {
    const renderContent = (column = 2) => (
        <Descriptions size="small" column={column}>
          <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Association">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      );
      
      const extraContent = (
        <div
          style={{
            display: 'inline',
            width: 'max-content',
            justifyContent: 'flex-end',
            backgroundColor: 'red',
          }}
        >
          <Statistic
            title="Status"
            value="Pending"
            style={{
              marginRight: 32,
            }}
          />
          <Statistic title="Price" prefix="$" value={568.08} />
        </div>
      );
      
      const Content = ({ children, extra }) => {
        return (
          <div className="content">
            <div className="main">{children}</div>
            <div className="extra">{extra}</div>
          </div>
        );
      };
    const [collapsed,setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(!collapsed);
      };
    return (
      <StyledWrapper>
        <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
    <Sider
   
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
    
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1" />
          <TabPane tab="Rule" key="2" />
        </Tabs>
      }
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
      </StyledWrapper>
    )
  }
  export default HomePage