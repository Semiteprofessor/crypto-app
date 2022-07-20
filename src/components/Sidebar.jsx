/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import {
	DashboardOutlined,
	AlertOutlined,
	DollarOutlined,
	CalendarOutlined,
	BankOutlined,
	GlobalOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { iconStyle } from ".././styles/style";
import { connect } from "react-redux";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<>
			<div>
				<Menu
					mode="inline"
					theme="dark"
					defaultOpenKeys={[
						"menu-exchange-rates",
						"menu-updates",
						"menu-coins",
						"menu-events",
						"menu-global",
						"menu-exchanges",
					]}
					style={{ height: "100%", borderRight: 0 }}>
					{/* Status updates */}
					<Menu.Item
						key="menu-dashboard"
						icon={<DashboardOutlined style={iconStyle} />}>
						<Link to="/dashboard">
							<span className="menu-title">Dashboard</span>
						</Link>
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
			</div>
		</>
	);
};

export default Sidebar;
