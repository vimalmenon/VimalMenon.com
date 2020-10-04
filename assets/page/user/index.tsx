import React from "react";

import {
	Switch,
	Route
} from "react-router-dom";

import {useMetadata} from "utility";
import {Metadata} from "component";

import Home from "./home";
import PageNotFound from "./page-not-found";



const User: React.FC<IBlankMethod> = () => {
	const {navigation} = useMetadata();
	return (
		<React.Fragment>
			<Metadata title={navigation.title} />
			<Switch>
				<Route exact path={`/`} component={Home} />
				<Route component={PageNotFound} />
			</Switch>
		</React.Fragment>
	);
};

export default User;