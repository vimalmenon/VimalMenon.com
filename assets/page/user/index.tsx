import React from "react";
import { useSelector } from "react-redux";

import {
	Switch,
	Route
} from "react-router-dom";

import Home from "./home";
import PageNotFound from "./page-not-found";

const User: React.FC<IBlankMethod> = () => {
	//const component = useSelector<IState, number>(state => state.pendingTasks);
	//console.log(component);
	return (
		<Switch>
			<Route exact path={`/`} component={Home} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default User;