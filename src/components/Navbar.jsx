/** @format */

import React from "react";
import { Layout, Menu, Icon } from "antd";
import { iconStyle } from "../styles/style";
import logoImage from "../images/logo/logo.png";
import { connect } from "react-redux";

const { Header } = Layout;
const Navbar = () => {
	return (
		<div>
			<Header className="header">
				<Menu
					theme="dark"
					mode="horizontal"
					style={{ lineHeight: "64px" }}>
					<Menu.Item key="logo"></Menu.Item>
					<Menu.Item></Menu.Item>
					<Menu.Item></Menu.Item>
					<Menu.Item></Menu.Item>
					<Menu.Item></Menu.Item>
				</Menu>
			</Header>
		</div>
	);
};

export default Navbar;
