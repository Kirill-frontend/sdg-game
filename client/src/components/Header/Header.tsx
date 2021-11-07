import React from 'react';
import { Layout, Menu } from 'antd';

import useStyles from "./Header.styles";

const { Header } = Layout;

function HeaderSite() {
    const classes = useStyles();

    return (
        <Header className={classes.header}>
            <div className="logo" />
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderSite;