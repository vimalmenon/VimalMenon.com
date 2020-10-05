import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import ContactBar from "./contact-bar";
import NavigationBar from "./navigation-bar";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column",
		},
	});
});

const Header:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ContactBar />
			<NavigationBar />
		</div>
	);
};

export default Header;