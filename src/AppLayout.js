import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logowhite.png';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const LayoutHeader = styled(Header)`
  display: flex;
  position: fixed;
  zIndex: 1;
  width: 100%;
  padding-top: 2px;
  height: 70px;
`;

const LogoContainer = styled.div`
  width: 300px;
  margin-right: 15px;
`;

const HeaderMenu = styled(Menu)`
  width: 100%;
`

const PageContent = styled(Content)`
  padding: 0px 50px;
  margin-top: 70px;
`;

const SubContent = styled.div`
  padding: 24px;
  min-height: 320px;
`;

const AppLayout = () => (
  <Layout>
    <LayoutHeader>
      <LogoContainer>
        <img src={logo} style={{maxWidth: '100%'}} alt="minimum.finance" />
      </LogoContainer>
      <HeaderMenu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </HeaderMenu>
    </LayoutHeader>
    <PageContent>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>minimum.finance</Breadcrumb.Item>
        <Breadcrumb.Item>Vaults</Breadcrumb.Item>
        <Breadcrumb.Item>Dai</Breadcrumb.Item>
      </Breadcrumb>
      <SubContent className="site-layout-background">
        Content
      </SubContent>
    </PageContent>
    <Footer style={{ textAlign: 'center' }}>minimum.finance ©2021 Created by Ant UED</Footer>
  </Layout>
)

export default AppLayout;