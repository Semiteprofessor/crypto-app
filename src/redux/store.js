/** @format */

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import {
	coinsReducer,
	coinDetailsReducer,
	globalReducer,
	exchangeRateReducer,
	exchangeReducer,
	eventReducer,
	statusUpdateReducer,
	navbarMenuItemReducer,
	siderbarMenuItemReducer,
} from "./reducers/coinReducers";

const reducer = combineReducers({
	coins: coinsReducer,
	coinDetails: coinDetailsReducer,
	global: globalReducer,
	echangeRate: exchangeRateReducer,
	exchanges: exchangeReducer,
	event: eventReducer,
	status: statusUpdateReducer,
	navbar: navbarMenuItemReducer,
	sidebar: siderbarMenuItemReducer,
});

const midddleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...midddleware)),
);

export default store;
