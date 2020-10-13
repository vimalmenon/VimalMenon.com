import React from "react";
import { useSelector } from "react-redux";

import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


import {common} from "utility";

const Toolbar:React.FC = () => {
	const type = useSelector<IState, ThemeType>(state => state.common.theme);
	if (type ==="light") {
		return (
			<Tooltip title="Dark mode" aria-label="Dark mode" onClick={common.switchThemeLocalStorageAndState}>
				<IconButton>
					<BrightnessLowIcon/> 
				</IconButton>
			</Tooltip>
		);
	} 
	return (
		<Tooltip title="Light mode" aria-label="Light mode" onClick={common.switchThemeLocalStorageAndState}>
			<IconButton>
				<BrightnessHighIcon/> 
			</IconButton>
		</Tooltip>
	);
};

export default Toolbar;