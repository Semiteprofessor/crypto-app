/** @format */

import { market_processed_table_keys } from "../constants/marketConstants";
import * as actionTypes from "../constants/coinConstants";

export const coinsReducer = (state = { coins: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_COINS_REQUEST:
			return {
				loading: true,
				coins: [],
			};
		case actionTypes.GET_COINS_SUCCESS:
			return { coins: action.payload, loading: false };
		case actionTypes.GET_COINS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const compileMarketData = (marketData) => {
	let data = {};

	for (
		let market_index = 0;
		market_index < market_processed_table_keys.length;
		market_index++
	) {
		let field = market_processed_table_keys[market_index];
		let entries = Object.entries(marketData[field]);
		for (let i = 0; i < entries.length; i++) {
			let key = entries[i][0];
			let value = entries[i][1];
			if (Object.keys(data).includes(key)) {
				data[key] = { ...data[key], [field]: value, cuerrency: key };
			} else {
				data[key] = { [field]: value, currency: key };
			}
		}
	}

	return Object.values(data);
};

export const coinDetailsReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_COIN_DETAILS_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_COIN_DETAILS_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const globalReducer = (state = {global: []}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_GLOBAL_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_GLOBAL_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const exchangeReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_EXCHANGES_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_EXCHANGES_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const exchangeRateReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_EXCHANGE_RATES_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_EXCHANGE_RATES_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const eventReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_EVENTS_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_EVENTS_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const statusUpdateReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GET_STATUS_UPDATE_SUCCESS:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		case actionTypes.GET_STATUS_UPDATE_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};

export const navbarMenuItemReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_NAVBAR_MENU_ITEM:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		default:
			return state;
	}
};

export const siderbarMenuItemReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_SIDEBAR_MENU_ITEM:
			const market_data_processed = compileMarketData(payload.market_data);
			return { ...payload, market_data_processed };

		default:
			return state;
	}
};
