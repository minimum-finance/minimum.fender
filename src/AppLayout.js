import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logos/minlogo-white.png';
import styled from 'styled-components';
import { RocketOutlined, BankOutlined, ExportOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from 'react-router-dom';
import Vaults from './Vaults';
import { InAppLink } from './utils';
import React from 'react';

const { Header, Content, Footer } = Layout;

const LayoutHeader = styled(Header)`
  display: flex;
  position: fixed;
  zIndex: 1;
  width: 100%;
  padding-top: 2px;
  height: 70px;
  background: linear-gradient(to top, #2E323B 0%, #383E4A 100%);
`;

const LogoContainer = styled.div`
  width: 120px;
  margin-right: 15px;
`;

const HeaderMenu = styled(Menu)`
  width: 100%;
`;

const PageContent = styled(Content)`
  padding: 0px 50px;
  margin-top: 70px;
`;

const SubContent = styled.div`
  padding: 24px;
  min-height: 320px;
`;

const AppLayout = () => {

  return (
    <Layout>
      <LayoutHeader>
        <LogoContainer>
          <img src={logo} style={{maxWidth: '100%'}} alt="minimum.finance" />
        </LogoContainer>
        <HeaderMenu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onSelect={() => InAppLink("vaults")}>
            <Link to="vaults" />
            <BankOutlined />{' '}
            Vaults
          </Menu.Item>
          <Menu.Item key="2">
            <RocketOutlined />{' '}
            Stats
          </Menu.Item>
          <Menu.Item key="3">
            <ExportOutlined />{' '}
            Docs
          </Menu.Item>
        </HeaderMenu>
      </LayoutHeader>
      <PageContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>minimum.finance</Breadcrumb.Item>
          <Breadcrumb.Item>Vaults</Breadcrumb.Item>
        </Breadcrumb>
        <Routes>
          <Route exact path="/vaults" element={<Vaults />} />
        </Routes>
      </PageContent>
      <Footer style={{ textAlign: 'center' }}>minimum.finance ©2021 Created by Ant UED</Footer>
    </Layout>
    )
  };

export default AppLayout;