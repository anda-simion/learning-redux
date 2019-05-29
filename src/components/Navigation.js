import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css'

const Navigation = () => {
    return (
        <div className="nav">
            <Menu mode="horizontal">
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/todo">ToDo</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/age">Age</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/sum">Sum</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/users">Users</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
};

export default Navigation;
