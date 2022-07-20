/** @format */

import React, { useState } from "react";
import { Layout, Input, Space, Avatar, Menu } from "antd";
import { iconStyle } from "../styles/style";
import { Link } from "react-router-dom";
import logoImage from "../images/logo/logo.png";
import {
	UserOutlined,
	AudioOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	DashboardOutlined,
	AlertOutlined,
	DollarOutlined,
	CalendarOutlined,
	BankOutlined,
	GlobalOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#1890ff",
		}}
	/>
);

const { Header, Sider, Content } = Layout;
const Navbar = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: () => setCollapsed(!collapsed),
						},
					)}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}>
					<Menu
						mode="inline"
						theme="dark"
						style={{ height: "100%", borderRight: 0 }}>
						{/* Status updates */}
						<Menu.Item
							key="menu-dashboard"
							icon={<DashboardOutlined style={iconStyle} />}>
							<Link to="/dashboard">Dashboard</Link>
						</Menu.Item>
						{/* Status updates */}
						<SubMenu
							key="menu-updates"
							title={
								<span className="menu-title">
									<AlertOutlined style={iconStyle} />
									Updates
								</span>
							}>
							<Menu.Item key="status-list">
								<Link to="/status/list">Updates Listing</Link>
							</Menu.Item>
						</SubMenu>
						{/* Coin Sub Menu */}
						<SubMenu
							key="menu-coins"
							title={
								<span className="menu-title">
									<DollarOutlined style={iconStyle} />
									Coins
								</span>
							}>
							<Menu.Item key="coin-list">
								<Link to="/coins/list">Coin Listing</Link>
							</Menu.Item>
							<Menu.Item key="coin-detail">
								<Link to="/coins/bitcoin">Coin Detail View</Link>
							</Menu.Item>
						</SubMenu>

						{/* Events Sub Menu */}
						<SubMenu
							key="menu-events"
							title={
								<span className="menu-title">
									<CalendarOutlined style={iconStyle} />
									Events
								</span>
							}>
							<Menu.Item key="events-list">
								<Link to="/events/list">Events Listing</Link>
							</Menu.Item>
						</SubMenu>

						{/* Exchanges Menu */}
						<SubMenu
							key="menu-exchanges"
							title={
								<span className="menu-title">
									<BankOutlined style={iconStyle} />
									Exchanges
								</span>
							}>
							<Menu.Item key="exchanges-list">
								<Link to="/exchanges/list">Exchanges Listing</Link>
							</Menu.Item>
						</SubMenu>

						{/* Exchange Rates Menu */}
						<SubMenu
							key="menu-exchange-rates"
							title={
								<span className="menu-title">
									<DollarOutlined style={iconStyle} />
									Exchange Rates
								</span>
							}>
							<Menu.Item key="exchange-rates-list">
								<Link to="/exchange-rates">Exchange Rates Listing</Link>
							</Menu.Item>
						</SubMenu>

						{/* Global Sub Menu */}
						<SubMenu
							key="menu-global"
							title={
								<span className="menu-title">
									<GlobalOutlined style={iconStyle} />
									Global
								</span>
							}>
							<Menu.Item key="global-main">
								<Link to="/global">Data</Link>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Content>
			</Layout>
		</div>
	);
};

export default Navbar;
