/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { iconStyle } from "../styles/style";
import { connect } from "react-redux";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
	return (
		<>
			<Sider
				breakpoint="md"
				collapsedWidth={0}
				width={240}
				style={{ background: "#0000" }}>
				<Menu
					mode="inline"
					selectedKeys={[
						"mdnu-exchange-rates",
						"menu-updates",
						"menu-coins",
						"menu-events",
						"menu-global",
						"menu-exchanges",
					]}
					style={{ height: "100%", borderRight: 0 }}>
					<SubMenu
						key="menu-updates"
						title={
							<span>
								{" "}
								{/* <Icon type="alert" style={iconStyle} /> */}
								Dashboard{" "}
							</span>
						}></SubMenu>
				</Menu>
			</Sider>
		</>
	);
};

export default Sidebar;
