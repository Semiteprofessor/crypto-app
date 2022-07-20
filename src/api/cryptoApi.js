/** @format */

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// require("dotenv").config();

// const cryptoApiHeaders = {
// 	"X-RapidAPI-Key": process.env.RAPID_API_KEY,
// 	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// export const cryptoApi = createApi({
// 	reducerPath: "cryptoApi",
// 	baseQuery: fetchBaseQuery({ baseUrl }),
// 	endpoints: (builder) => ({
// 		getCryptos: builder.query({
// 			query: () => createRequest("/exchanges"),
// 		}),
// 	}),
// });

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})