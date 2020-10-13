import React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"0 0 50%",
			flexDirection:"column",
			margin: theme.spacing(3,0),
		},
		title : {
			display: "flex",
			margin: theme.spacing(1,0),
		},
		container :{
			display: "flex",
			margin: theme.spacing(1,0),
		}
	});
});
const Contact:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			this is contact
		</div>
	);
};

export default Contact;