import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";

import {navigations, icons} from "model";

const {ArrowForward} =  icons;
const {footerNavigations} = navigations;

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
			flexWrap:"wrap"
		},
		linkItem : {
			display:"flex",
			flex: "0 0 50%",
			margin:theme.spacing(1,0),
		},
		link : {
			color:"white",
			textDecoration:"none",
			"&:hover": {
				color:"white"
			}
		},
		icon: {
			fontSize:"0.8rem"
		}
	});
});
const Explore = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				{footerNavigations.map((navigation, key) => {					
					return (
						<div key={key} className={classes.linkItem}>
							<Link to={navigation.url} className={classes.link}>
								<ArrowForward className={classes.icon}/> {navigation.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default React.memo(Explore);