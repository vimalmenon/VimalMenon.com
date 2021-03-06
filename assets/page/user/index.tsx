import React from "react";

import {
	Switch,
	Route
} from "react-router-dom";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {useMetadata} from "utility";
import {Metadata} from "component";


import Header from "./common/header";
import Footer from "./common/footer";

import Home from "./home";
import PrivacyPolicy from "./privacy-policy";
import Tutorials from "./tutorials";
import PageNotFound from "./page-not-found";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
	});
});

const User: React.FC<IBlankMethod> = () => {
	const {navigation} = useMetadata();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Metadata title={navigation.title} />
			<Header />
			<Switch>
				<Route exact path={`/`} component={Home} />
				<Route exact path={`/privacy-policy`} component={PrivacyPolicy} />
				<Route exact path={`/tutorials`} component={Tutorials} />
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
		</div>
	);
};

export default User;