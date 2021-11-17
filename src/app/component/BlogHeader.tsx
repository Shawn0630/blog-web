import { Avatar, Layout, Menu, Typography } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { SettingOutlined, HomeOutlined, HomeFilled, BookFilled, BookOutlined, ReadFilled, ReadOutlined, AppstoreFilled, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "~images/avatar.png";

import * as styles from "./BlogHeader.module.scss";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface BlogHeaderProps {
    test: boolean
}

interface BlogHeaderStates {
    current: string
}

export default class BlogHeader extends React.PureComponent<BlogHeaderProps, BlogHeaderStates> {
    constructor(props: BlogHeaderProps) {
        super(props);

        this.state = {
            current: "home"
        }

        this.handleClick = this.handleClick.bind(this);
    }


    public render(): JSX.Element {
        return <Header className={styles.header}>
                <div className={styles.left}>
                    <img src={Logo} className={styles.logo} />
                    <Title level={5} className={styles.title}>Shawn's Blog</Title>
                </div>
                <div className={styles.right}>
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={4}>
                        User
                    </Avatar>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={styles.headerMenu}>
                <Menu.Item key="home" icon={this.state.current == "home" ? <HomeFilled /> : <HomeOutlined />}>
                    <Link to="/home">
                        Home
                    </Link>
                </Menu.Item>
                
                <Menu.Item key="articles" icon={this.state.current == "articles" ? <ReadFilled /> : <ReadOutlined />}>
                    <Link to="/articles">
                        Articles
                    </Link>
                </Menu.Item>

                <Menu.Item key="projects" icon={this.state.current == "projects" ? <AppstoreFilled /> : <AppstoreOutlined />}>
                    <Link to="/projects">
                    Projects
                    </Link>
                </Menu.Item>

                <Menu.Item key="about" icon={<UserOutlined />}>
                    <Link to="/about">
                    About Me
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    }


  private handleClick(e: any): void {
    this.setState({ current: e.key });
  };
}