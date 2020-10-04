import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import ContactBar from "./contact-bar";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column",
		},
	});
});

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ContactBar />
			This is header
		</div>
	);
};

export default Header;