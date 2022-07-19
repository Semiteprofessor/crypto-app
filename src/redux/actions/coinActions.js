/** @format */

import * as actionTypes from "../constants/coinConstants";
import rapidapi from "../../api/cryptoApi";

export const fetchCoin = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COINS_REQUEST });
		const { data } = await rapidapi.get("/api/coins");
		dispatch({ type: actionTypes.GET_COINS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actionTypes.GET_COINS_FAIL, payload: error.message });
	}
};

export const fetchCoinDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COIN_DETAILS_REQUEST });
		const { data } = await rapidapi.get(
			`/api/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&sparkline=false&developer_data=true`,
		);
		dispatch({ type: actionTypes.GET_COIN_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_COIN_DETAILS_FAIL,
			payload: error.message,
		});
	}
};

export const fetchCoinMarketDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COINS_CHART_REQUEST });
		const { data } = await rapidapi.get(
			`/api/coins/${id}/market_chart?vs_currency=usd&days=7`,
		);
		dispatch({ type: actionTypes.GET_COINS_CHART_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_COINS_CHART_FAIL,
			payload: error.message,
		});
	}
};

export const fetchEvents = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EVENTS_REQUEST });
		const { data } = await rapidapi.get("/api/events");
		dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actionTypes.GET_EVENTS_FAIL, payload: error.message });
	}
};

export const fetchExchangeRates = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EXCHANGE_RATES_REQUEST });
		const { data } = await rapidapi.get("/api/exchange_rates");
		dispatch({ type: actionTypes.GET_EXCHANGE_RATES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_EXCHANGE_RATES_FAIL,
			payload: error.message,
		});
	}
};

export const fetchExchanges = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EXCHANGES_REQUEST });
		const { data } = await rapidapi.get("/api/exchanges");
		dispatch({ type: actionTypes.GET_EXCHANGES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_EXCHANGES_FAIL,
			payload: error.message,
		});
	}
};

export const fetchStatusUpdates = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_STATUS_UPDATE_REQUEST });
		const { data } = await rapidapi.get("/api/status_updates");
		dispatch({ type: actionTypes.GET_STATUS_UPDATE_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_STATUS_UPDATE_FAIL,
			payload: error.message,
		});
	}
};

export const fetchGlobal = () => async (dispatch) => {
	try {
	} catch (error) {}
};
