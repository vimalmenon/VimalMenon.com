import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import SocialMedias from "../../social-medias";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "row",
			background : "#00172B",
			justifyContent : "center",	
			color:"white",
			flex: "0 0 63px"
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			alignItems : "center",
			justifyContent :"flex-end",
			margin: theme.spacing(0,1),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const ContactBar:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<SocialMedias />
			</div>
		</div>
	);
};

export default ContactBar;