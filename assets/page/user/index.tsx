import React from "react";

import {
	Switch,
	Route
} from "react-router-dom";

import Home from "./home";
import PageNotFound from "./page-not-found";

const User = () => {
	return (
		<Switch>
			<Route exact path={`/`} component={Home} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default User;