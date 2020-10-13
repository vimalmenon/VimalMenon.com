import React from "react";

import {Entitlement} from "component";

import Login from "./login";
import Dashboard from "./dashboard";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../user/common/header";
import Footer from "../user/common/footer";

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

const Admin:React.FC<IBlankMethod> = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header />
			<Entitlement
				name="Login"
				render={() => {
					return (
						<Login />
					);
				}} />
			<Entitlement
				name="Dashboard"
				render={() => {
					return (
						<Dashboard />
					);
				}} />
			<Footer />
		</div>
	);
};

export default Admin;