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
		type: CommonTypes.SET_SOCIAL_MEDIAS,
		payload:{
			socialMedias:value
		}
	};
};
const setNotification = (value:string|null):IAction<{notification:string|null}> => {
	return {
		type: CommonTypes.SET_NOTIFICATION,
		payload:{
			notification:value
		}
	};
};
export type ActionTypes = IAction<{theme:ThemeType;socialMedias:ISocialMedia[];notification:string|null}>;

export default {
	setTheme,
	setNotification,
	setSocialMedias
};