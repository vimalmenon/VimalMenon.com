import CommonTypes from "./common.types";

const setTheme = (value:ThemeType):IAction<ThemeType> => {
	return {
		type: CommonTypes.SET_THEME,
		payload:value
	};
};

export default {
	setTheme
};