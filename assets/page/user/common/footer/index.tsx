import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import UpperFooter from "./upper-footer";
import LowerFooter from "./lower-footer";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		},
	});
});
const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<UpperFooter />
			<LowerFooter />
		</div>
	);
};

export default Footer;