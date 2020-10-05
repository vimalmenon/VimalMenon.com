import React from "react";
import { useSelector } from "react-redux";


import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";

import light from "../../../../../../image/logo/light.jpg";
import dark from "../../../../../../image/logo/dark.png";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background : "white",
			height: "50px",
			flex: "0 0 182px",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.default:"#121212"
		},
		logo : {
			width: "100%"
		},
		dark : {
		}
	});
});

const Logo:React.FC = () => {
	const type = useSelector<IState, ThemeType>(state => state.common.theme);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Link to={"/"}>
				{type === "light" ? 
					<img 
						src={light}
						alt={"Vimal Menon"}
						className={classes.logo}/>
					:
					<img 
						src={dark} 
						alt={"Vimal Menon"}
						className={classes.logo}/>

				}
			</Link>
		</div>
	);
};

export default Logo;