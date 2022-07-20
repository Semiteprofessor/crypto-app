/** @format */

import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserAddOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CoinsList from "./pages/coins/CoinsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logoImage from "./images/logo/logo.png";

const { Header, Sider, Content } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Router>
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					width={250}
					height={1000}>
					<div className="logo" />
					<Sidebar />
				</Sider>
				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{
							padding: 0,
							position: "sticky",
						}}>
						<div className="nav">
							{React.createElement(
								collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
								{
									className: "trigger",
									onClick: () => setCollapsed(!collapsed),
								},
							)}

							{React.createElement(UserOutlined, { className: "avatar" })}
						</div>

						{/* <div className="nav">
							<img src={logoImage} alt="" width="150" height="50" />
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						</div> */}
					</Header>
					<Content className="site-layout-background">
						<Switch>
							<Route exact path="/dashboard" component={Dashboard} />
							<Route path="/coins/list" exact component={CoinsList} />
							{/* <Route path='/about' exact component={About}/>
                    <Route path='/coins/:coinId/' exact component={CoinsDetail}/>
                    <Route path='/exchanges/list' exact component={ExchangesList}/>
                    <Route path='/global' exact component={Global}/>
                    <Route path='/empty' exact component={Empty}/>
                    <Route path='/events/list' exact component={Events}/>
                    <Route path='/exchange-rates' exact component={ExchangeRates}/>
                    <Route path='/status/list' exact component={StatusUpdates}/> */}
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
};

export default App;
