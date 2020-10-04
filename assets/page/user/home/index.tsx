import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Hero from "./hero";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
	});
});
const Home:React.FC<IBlankMethod> = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Hero />
		</div>
	);
};

export default Home;