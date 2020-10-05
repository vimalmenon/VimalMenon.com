import React from "react";
import Slider from "react-animated-slider";
//import "react-animated-slider/build/horizontal.css";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const content = [
	{
		title: "Vulputate Mollis Ultricies Fermentum Parturient",
		description:
		"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
		button: "Read More",
		image: "https://i.imgur.com/ZXBtVw7.jpg",
	},
	{
		title: "Tortor Dapibus Commodo Aenean Quam",
		description:
		"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
		button: "Discover",
		image: "https://i.imgur.com/DCdBXcq.jpg"
	},
	{
		title: "Phasellus volutpat metus",
		description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
		button: "Buy now",
		image: "https://i.imgur.com/DvmN8Hx.jpg"
	}
];

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
		sliderWrapper : {
			position: "relative",
			height: "70vh",
			overflow: "hidden",
			"& .slide": {
				height: "70vh",
				backgroundSize: "cover !important",
				"&::before" : {
					content: "''",
					display: "block",
					position: "absolute",
					width: "100%",
					height: "100%",
					background: "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
					bottom: 0,
					left: 0,
				}
			}
		},
		sliderContent : {
			textAlign: "center"
		},
		inner : {
			padding: "0 70px",
			boxSizing: "border-box",
			position: "absolute",
			width: "100%",
			top: "50%",
			left: "50%",
			"transform": "translate(-50%, -50%)"
		},
		header : {
			fontWeight: 900,
			margin: "0 auto",
			maxWidth: "840px",
			color: "#FFFFFF",
			fontSize: "64px",
			lineHeight: 1,
			[theme.breakpoints.down("sm")]: {
				fontSize: "32px"
			},
			"@media (max-height: 600px)" : {
				fontSize: "32px"
			}
		},
		p : {
			color: "#FFFFFF",
			fontSize: "14px",
			lineHeight: 1.5,
			margin: "20px auto 30px",
			maxWidth: "640px"
		}
	});
});

const Hero:React.FC = () => {
	const classes =useStyles();
	return (
		<div className={classes.root}>
			<Slider className={classes.sliderWrapper}>
				{content.map((item, index) => (
					<div
						key={index}
						className={classes.sliderContent}
						style={{ background: `url('${item.image}') no-repeat center center` }}>
						<div className={classes.inner}>
							<h1 className={classes.header}>{item.title}</h1>
							<p className={classes.p}>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Hero;