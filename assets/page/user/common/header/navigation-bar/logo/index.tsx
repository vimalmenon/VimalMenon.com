import React from "react";
import { useSelector } from "react-redux";

import light from "../../../../../../image/logo/light.jpg";
import dark from "../../../../../../image/logo/dark.png";

console.log(light, dark);

const Logo = () => {
	const type = useSelector<IState, ThemeType>(state => state.common.theme);
	return (
		<div>
			{type === "light" ? 
				<img 
					src={light} 
					alt={"Vimal Menon"}/>:
				<img 
					src={dark} 
					alt={"Vimal Menon"}/>

			}
			This is {type}
		</div>
	);
};

export default Logo;