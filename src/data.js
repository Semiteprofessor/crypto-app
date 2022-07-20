/** @format */

import React from "react";
import {
	AiOutlineCalendar,
	AiOutlineShoppingCart,
	AiOutlineAreaChart,
	AiOutlineBarChart,
	AiOutlineStock,
	AiOutlineUser,
} from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import {
	FiShoppingBag,
	FiEdit,
	FiPieChart,
	FiBarChart,
	FiCreditCard,
	FiStar,
	FiShoppingCart,
	FiList,
} from "react-icons/fi";
import {
	BsKanban,
	BsBarChart,
	BsBoxSeam,
	BsCurrencyDollar,
	BsShield,
	BsChatLeft,
	BsPen,
	BsFileRuled,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts, IoIosPeople } from "react-icons/io";
import {
	RiContactsLine,
	RiStockLine,
	RiNumbersLine,
	RiAdminLine,
	RiUserSettingsLine,
} from "react-icons/ri";
import {
	MdOutlineSupervisorAccount,
	MdDashboard,
	MdSubject,
	MdOutlineMarkChatRead,
	MdOutlineBookmarkAdded,
	MdOutlineTimeToLeave,
	MdOutlineIntegrationInstructions,
	MdPassword,
} from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid, GiCheckMark, GiPlayerNext } from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { GrUserSettings, GrUserAdmin } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { SiMicrosoftacademic } from "react-icons/si";

export const links = [
	{
		title: "Dashboard",
		links: [
			{
				name: "dashboard",
				icon: <MdDashboard />,
			},
		],
	},
	{
		title: "Student",
		links: [
			{
				name: "student",
				icon: <IoIosPeople />,
			},
		],
	},
	{
		title: "Teacher",
		links: [
			{
				name: "teacher",
				icon: <AiOutlineUser />,
			},
		],
	},
	{
		title: "Academic",
		links: [
			{
				name: "classes",
				icon: <SiGoogleclassroom />,
			},
			{
				name: "section",
				icon: <AiOutlineCalendar />,
			},
			{
				name: "subjects",
				icon: <MdSubject />,
			},
		],
	},
	{
		title: "Attendance",
		links: [
			{
				name: "student attendance",
				icon: <MdOutlineMarkChatRead />,
			},
			{
				name: "employee attendance",
				icon: <MdOutlineBookmarkAdded />,
			},
		],
	},
	{
		title: "Exams",
		links: [
			{
				name: "exam",
				icon: <BsPen />,
			},
			{
				name: "grade",
				icon: <RiNumbersLine />,
			},
			{
				name: "rule",
				icon: <BsFileRuled />,
			},
		],
	},
	{
		title: "Mark & Result",
		links: [
			{
				name: "mark",
				icon: <GiCheckMark />,
			},
			{
				name: "result",
				icon: <FiList />,
			},
		],
	},
	{
		title: "Promotion",
		links: [
			{
				name: "promotion",
				icon: <GiPlayerNext />,
			},
		],
	},
	{
		title: "HRM",
		links: [
			{
				name: "employee",
				icon: <IoIosPeople />,
			},
			{
				name: "leave",
				icon: <MdOutlineTimeToLeave />,
			},
			{
				name: "policy",
				icon: <RiContactsLine />,
			},
		],
	},
	{
		title: "Users",
		links: [
			{
				name: "user",
				icon: <AiOutlineUser />,
			},
		],
	},
	{
		title: "Reports",
		links: [
			{
				name: "monthly attendance",
				icon: <TbReportAnalytics />,
			},
			{
				name: "student list",
				icon: <IoMdContacts />,
			},
		],
	},
	{
		title: "Administrator",
		links: [
			{
				name: "institute settings",
				icon: <RiUserSettingsLine />,
			},
			{
				name: "academic year",
				icon: <SiMicrosoftacademic />,
			},
			{
				name: "report settings",
				icon: <GoReport />,
			},
			{
				name: "user role",
				icon: <MdOutlineIntegrationInstructions />,
			},
			{
				name: "system admin",
				icon: <RiAdminLine />,
			},
			{
				name: "reset user password",
				icon: <MdPassword />,
			},
		],
	},
];
