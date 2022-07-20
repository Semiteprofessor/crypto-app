/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Layout, Table, Button, Tag } from "antd";
import { contentStyle, tableStyle } from "../../styles/style";
import axios from "axios";

// Actions
import { getCoins as listCoins } from "../../redux/actions/coinActions";

const Content = Layout;

const CoinsList = () => {
	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Symbol",
			dataIndex: "symbol",
			key: "symbol",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (item) => <Tag color="purple">{item}</Tag>,
		},
		{
			title: "View Details",
			dataIndex: "id",
			key: "id",
			render: (id) => (
				<Button type="primary">
					<Link to={`/coins/${id}`}>View</Link>
				</Button>
			),
		},
	];

	const dispatch = useDispatch();

	const getCoin = useSelector((state) => state.getCoins);
	const { coins, loading, error } = getCoin;

	useEffect(() => {
		dispatch(listCoins());
	}, [dispatch]);

	return (
		<Layout style={{ padding: "1rem" }}>
			<Content style={contentStyle}>
				<Table
					style={tableStyle}
					bordered={true}
					loading={loading}
					error={error}
					dataSource={coins}
					columns={columns}
				/>
			</Content>
		</Layout>
	);
};

export default CoinsList;
