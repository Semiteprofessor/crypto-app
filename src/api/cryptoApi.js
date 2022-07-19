/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
require("dotenv").config();

const cryptoApiHeaders = {
	"X-RapidAPI-Key": process.env.RAPID_API_KEY,
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryproApi = createApi({
	reducerPath: "cryproApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => "/exchanges",
		}),
	}),
});
