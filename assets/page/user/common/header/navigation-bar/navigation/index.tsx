import React from "react";
import clsx from "clsx";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import {navigations} from "model";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root:{
			display: "flex",
			[theme.breakpoints.down("sm")]:{
				display: "none",
			}
		},
		navigationItem:{
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			margin: theme.spacing(0,1),
			padding: theme.spacing(0,0.5),
			fontSize:"1rem",
			flexDirection:"column",
			"&::after" : {
				content: "''",
				display:"inline-block",
				width:"100%",
				height:"2px",
			},
			"&:hover" : {
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},
			"&.active" : {
				//backgroundColor:"#19191A",
				color:(theme.palette.type==="light")?"black":"white",
				"&::after" : {
					content: "''",
					display:"inline-block",
					width:"100%",
					height:"2px",
					background: "#FA2B54",
					animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`,
				},
			},	
		},
		"@keyframes myEffect": {
			"0%": {
				width:"0%"
			},
			"100%": {
				width:"100%"
			}
		},
	});
});
const Navigation:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{navigations.mainNavigations.map((navigation, key) => {
				return (
					<div key={key} className={clsx(classes.navigationItem)}>
						{navigation.name}
					</div>
				);
			})}
		</div>
	);
};

export default Navigation;