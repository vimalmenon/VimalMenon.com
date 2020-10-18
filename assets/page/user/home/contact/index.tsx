import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Container from "../../common/container";

import Text from "./text";
import Form from "./form";

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
				<Text />
				<Form />
			</div>
		</Container>
	);
};

export default Contact;