import { Avatar, Button, Layout, Menu, Typography } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { SettingOutlined, HomeOutlined, HomeFilled, BookFilled, BookOutlined, ReadFilled, ReadOutlined, AppstoreFilled, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "~images/avatar.png";

import * as styles from "./BlogHeader.module.scss";
const { Header } = Layout;
const { Title } = Typography;

import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouterState } from "connected-react-router";
import { login } from "~src/stores/user/user-actions";
import { RootState } from "~src/stores";

interface BlogHeaderProps {
    test?: boolean
}

interface StoreProps {
    router: RouterState
    loggedIn?: boolean
}

interface DispatchProps {
    loginUser: typeof login
}

const mapStateToProps: MapStateToProps<StoreProps, BlogHeaderProps> = (state: RootState, props: BlogHeaderProps) => {
    return {
      router: state.router,
      loggedIn: state.user.loggedIn
    };
};
  
const mapDispatchToProps: MapDispatchToProps<DispatchProps, BlogHeaderProps> = {
    loginUser: login
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps)
(class BlogHeader extends React.PureComponent<BlogHeaderProps & StoreProps & DispatchProps> {
    constructor(props: BlogHeaderProps & StoreProps & DispatchProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    public render(): JSX.Element {
        const basePath: string = '/blog';

        return <Header className={styles.header}>
                <div className={styles.left}>
                    <img src={Logo} className={styles.logo} />
                    <Title level={5} className={styles.title}>Shawn's Blog</Title>
                </div>
                <div className={styles.right}>
                    {
                        this.props.loggedIn ? 
                        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={4}>
                            U
                        </Avatar> :
                        <Button type="primary" onClick={this.handleLogin}>Login</Button>
                    }
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.props.router.location.pathname]} mode="horizontal" className={styles.headerMenu}>
                <Menu.Item key="home" icon={this.props.router.location.pathname == "home" ? <HomeFilled /> : <HomeOutlined />}>
                    <Link to={`${basePath}/home`}>
                        Home
                    </Link>
                </Menu.Item>
                
                <Menu.Item key="articles" icon={this.props.router.location.pathname == "articles" ? <ReadFilled /> : <ReadOutlined />}>
                    <Link to={`${basePath}/articles`}>
                        Articles
                    </Link>
                </Menu.Item>

                <Menu.Item key="projects" icon={this.props.router.location.pathname == "projects" ? <AppstoreFilled /> : <AppstoreOutlined />}>
                    <Link to={`${basePath}/projects`}>
                    Projects
                    </Link>
                </Menu.Item>

                <Menu.Item key="about" icon={<UserOutlined />}>
                    <Link to={`${basePath}/about`}>
                    About Me
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    }


  private handleClick(e: any): void {
    this.setState({ current: e.key });
  };

  private handleLogin(): void {
      this.props.loginUser();
  }
})