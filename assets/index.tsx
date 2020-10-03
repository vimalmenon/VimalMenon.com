import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./index.scss";

import Page from "./page";



import store from "./store";


ReactDOM.render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById("main"),
);