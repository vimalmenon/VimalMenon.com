import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex"
		},
	});
});
const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			This is Footer
		</div>
	);
};

export default Footer;