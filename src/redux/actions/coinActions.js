/** @format */

import * as actionTypes from "../constants/coinConstants";
import coingecko from "../../api/cryptoApi";

export const getCoins = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COINS_REQUEST });
		const { data } = await coingecko.get("/coins/list");
		dispatch({ type: actionTypes.GET_COINS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actionTypes.GET_COINS_FAIL, payload: error.message });
	}
};

export const getCoinDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COIN_DETAILS_REQUEST });
		const { data } = await coingecko.get(
			`/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&sparkline=false&developer_data=true`,
		);
		dispatch({ type: actionTypes.GET_COIN_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_COIN_DETAILS_FAIL,
			payload: error.message,
		});
	}
};

export const getCoinMarketDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_COINS_CHART_REQUEST });
		const { data } = await coingecko.get(
			`/coins/${id}/market_chart?vs_currency=usd&days=7`,
		);
		dispatch({ type: actionTypes.GET_COINS_CHART_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_COINS_CHART_FAIL,
			payload: error.message,
		});
	}
};

export const getEvents = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EVENTS_REQUEST });
		const { data } = await coingecko.get("/events");
		dispatch({ type: actionTypes.GET_EVENTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actionTypes.GET_EVENTS_FAIL, payload: error.message });
	}
};

export const getExchangeRates = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EXCHANGE_RATES_REQUEST });
		const { data } = await coingecko.get("/exchange_rates");
		dispatch({ type: actionTypes.GET_EXCHANGE_RATES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_EXCHANGE_RATES_FAIL,
			payload: error.message,
		});
	}
};

export const getExchanges = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_EXCHANGES_REQUEST });
		const { data } = await coingecko.get("/exchanges");
		dispatch({ type: actionTypes.GET_EXCHANGES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_EXCHANGES_FAIL,
			payload: error.message,
		});
	}
};

export const getStatusUpdates = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_STATUS_UPDATE_REQUEST });
		const { data } = await coingecko.get("/status_updates");
		dispatch({ type: actionTypes.GET_STATUS_UPDATE_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_STATUS_UPDATE_FAIL,
			payload: error.message,
		});
	}
};

export const getGlobal = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_GLOBAL_REQUEST });
		const { data } = await coingecko.get("/global");
		dispatch({ type: actionTypes.GET_GLOBAL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: actionTypes.GET_GLOBAL_FAIL,
			payload: error.message,
		});
	}
};
