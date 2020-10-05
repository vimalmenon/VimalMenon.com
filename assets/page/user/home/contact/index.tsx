import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root : {
			display: "flex",
			flexDirection:"column",
			margin:theme.spacing(10,0),
		}
	});
});
const Contact:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			This is contact
		</div>
	);
};

export default Contact;