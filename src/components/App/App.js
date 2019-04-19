import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Breadcrumb, Icon } from 'antd';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import PropTypes from "prop-types";
import RepoTable from '../RepoTable/RepoTable';

import { axiosGitHubGraphQL } from '../../utils/githubapi';
import { GET_ORGANIZATION } from '../../utils/query'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      collapsed: false,
      login: false
    };

    this.onFetchFromGitHub = this.onFetchFromGitHub.bind(this);
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then(result => console.log(result));
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">JS Most Stars</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Most Stars JS</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Most Stars TS</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>Most Stars Elm</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="file" />
              <span>Most Stars Dart</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <RepoTable />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
