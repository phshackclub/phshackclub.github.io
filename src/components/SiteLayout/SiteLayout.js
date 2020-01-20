import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const year = new Date().getFullYear();

class SiteLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {

    const { match, location, history } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" selectedKeys={location.pathname} mode="inline">
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
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>PHS Hack Club ©{year}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(SiteLayout);