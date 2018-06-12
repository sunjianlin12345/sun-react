import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import { Menu, Layout, Icon} from 'antd';
const { Header, Content, Footer } = Layout;

function MainLayout({ children, location }) {
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ height: '40px', background: '#FFF', padding: 0 }}>
        <div className={styles.menu_left}>
          <i className={styles.menu_left_logo}></i>
          <span className={styles.menu_left_logo_text}>sun-孙</span>
        </div>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['/']}
          style={{ height: '40px', lineHeight: '40px' }}
        >
          <Menu.Item key="/">
            <Link to="/"><Icon type="home" />首页</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users"><Icon type="bars" />Users</Link>
          </Menu.Item>
          <Menu.Item key="/testUsers">
            <Link to="/testUsers"><Icon type="bars" />测试</Link>
          </Menu.Item>
          <Menu.Item key="/introduction">
            about me
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className={styles.content}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default withRouter(MainLayout);
