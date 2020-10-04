import {storage, StorageType} from "utility";
import {THEME_VALUE} from "const";
import store from "store";
import actions from "actions";

const setTheme:(value:ThemeType) =>void = (value):void => {
	const localStorage =  storage.selectStorage(StorageType.local).getStorage();
	storage.selectStorage(StorageType.local).addToStorage({...localStorage, [THEME_VALUE]:value});
};
const getTheme = ():ThemeType => {
	const value = storage.selectStorage(StorageType.local).getStorage();
	if(value[THEME_VALUE]) {
		return value[THEME_VALUE];
	}
	return store.getState().common.theme;
};

export const themeLocalStorageAndState = ():void => {
	const value = storage.selectStorage(StorageType.local).getStorage();
	if(value[THEME_VALUE]) {
		store.dispatch(actions.common.setTheme(value[THEME_VALUE]));
	}
	
};
export const switchThemeLocalStorageAndState = ():void => {
	const theme = (getTheme() === "light")? "dark" : "light";
	setTheme(theme);
	store.dispatch(actions.common.setTheme(theme));
};

export default {
	themeLocalStorageAndState,
	switchThemeLocalStorageAndState
};