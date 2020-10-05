import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";


import Hero from "./hero";
import About from "./about";
import Tutorials from "./tutorials";
import Contact from "./contact";

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
			<About />
			<Tutorials />
			<Contact />
		</div>
	);
};

export default Home;