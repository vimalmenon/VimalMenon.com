import CommonTypes from "./common.types";

	
const setTheme = (value:ThemeType):IAction<{theme:ThemeType}> => {
	return {
		type: CommonTypes.SET_THEME,
		payload:{
			theme:value
		}
	};
};
const setSocialMedias = (value:ISocialMedia[]):IAction<{socialMedias:ISocialMedia[]}> => {
	return {
		type: CommonTypes.SET_THEME,
		payload:{
			socialMedias:value
		}
	};
};

export type ActionTypes = IAction<{theme:ThemeType;socialMedias:ISocialMedia[]}>;

export default {
	setTheme,
	setSocialMedias
};