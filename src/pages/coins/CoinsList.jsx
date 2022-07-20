/** @format */

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Layout, Table } from "antd";
import React from "react";
import { contentStyle } from "../../styles/style";

const Content = Layout;
const columns = [
	{
		title: "Full Name",
		width: 100,
		dataIndex: "name",
		key: "name",
		fixed: "left",
	},
	{
		title: "Age",
		width: 100,
		dataIndex: "age",
		key: "age",
		fixed: "left",
	},
	{
		title: "Column 1",
		dataIndex: "address",
		key: "1",
		width: 150,
	},
	{
		title: "Column 2",
		dataIndex: "address",
		key: "2",
		width: 150,
	},
	{
		title: "Column 3",
		dataIndex: "address",
		key: "3",
		width: 150,
	},
	{
		title: "Column 4",
		dataIndex: "address",
		key: "4",
		width: 150,
	},
	{
		title: "Column 5",
		dataIndex: "address",
		key: "5",
		width: 150,
	},
	{
		title: "Action",
		key: "operation",
		fixed: "right",
		width: 100,
		render: () => (
			<div className="action">
				<div className="action1">
					<EditOutlined />
				</div>
				<div className="action2">
					<EyeOutlined />
				</div>
				<div className="action3">
					<DeleteOutlined />
				</div>
			</div>
		),
	},
];
const data = [];

for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edrward ${i}`,
		age: 32,
		address: `London Park no. ${i}`,
	});
}

const CoinsList = () => (
	<Layout style={{ padding: "1rem" }}>
		<Content style={contentStyle}>
			<Table
				columns={columns}
				dataSource={data}
			/>
		</Content>
	</Layout>
);

export default CoinsList;
