import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Container from "../../common/container";

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
		<Container>
			<div className={classes.root}>
				This is contact
			</div>
		</Container>
	);
};

export default Contact;