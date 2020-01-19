import React from 'react';
import { Link, useLocation } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const year = new Date().getFullYear();

const SiteLayout = ({ children }) => {

  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={location.pathname}>
          <Menu.Item key="/home">
            <Link to="/home">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">
              <Icon type="file" />
              <span>About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="desktop" />
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="calendar" />
            <span>Calender</span>
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>PHS Hack Club ©{year}</Footer>
      </Layout>
    </Layout>
  )
}

export default SiteLayout;