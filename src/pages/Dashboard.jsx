/** @format */

import React from "react";
import { Layout, Typography, Card, Row, Col } from "antd";
import { contentStyle } from "../styles/style";
import svg1 from "../images/flaticon/001-bitcoin.svg";
import svgExchangeRate from "../images/flaticon/004-exchange.svg";
import svgChat from "../images/flaticon/001-chat.svg";
import svgMobile from "../images/flaticon/003-smartphone.svg";
import svgUpdate from "../images/flaticon/005-idea.svg";
import svgWorldwide from "../images/flaticon/worldwide.svg";
import { colStyle } from "../styles/style";

const { Content } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;

const features = [
	{
		svg: svg1,
		title: "Statistics",
		description: "Statistics and charts are available in real-time.",
	},
	{
		svg: svgChat,
		title: "Community",
		description:
			"Be informed about upcoming cryptocurrency events in your area.",
	},
	{
		svg: svgExchangeRate,
		title: "Exchange Rates",
		description:
			"View up to date exchange rates for your favourite cryptocurrencies.",
	},
	{
		svg: svgMobile,
		title: "Mobile Friendly",
		description:
			"This site aims to be mobile friendly. View website on any device you like.",
	},
	{
		svg: svgUpdate,
		title: "Updates",
		description:
			"App is continuously updated with the latest data, reflecting coingecko API.",
	},
	{
		svg: svgWorldwide,
		title: "Global",
		description: "Data availability on a global scale",
	},
];

const Dashboard = () => {
	return (
		<Layout style={{ padding: "1rem" }}>
			<Content style={contentStyle}>
				<Title level={1} style={{ textAlign: "center" }}>
					Rancho Crypto
				</Title>
				<Paragraph>
					Bringing you cryptocurrency related data in a user friendly,
					digestible dashboard platform.
				</Paragraph>

				<Title level={3}>Features</Title>

				<Row gutter={16} style={{ textAlign: "center" }} type="flex">
					{features.map((item, index) => (
						<Col
							key={index}
							xs={24}
							sm={24}
							md={8}
							lg={8}
							xl={8}
							style={colStyle}>
							<Card
								style={{ border: "none" }}
								cover={
									<img
										alt="Home page crypto svg"
										style={{
											padding: "2rem",
											maxWidth: "160px",
											margin: "auto",
										}}
										src={item.svg}
									/>
								}>
								<Meta title={item.title} description={item.description} />
							</Card>
						</Col>
					))}
				</Row>
			</Content>
		</Layout>
	);
};

export default Dashboard;