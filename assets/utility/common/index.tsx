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
export const getHeadersAuthorization = ():string=> {
	const value = storage.selectStorage(StorageType.session).getStorage();
	return value["Authorization"];
};
export const setHeadersAuthorization= (value:string|null):void=> {
	storage.selectStorage(StorageType.session).addToStorage({Authorization:value});
};
export const replaceUrlBackslashAtEnd = (url: string) => {
	if ((url !== "/") && url.substring(url.length-1, url.length) === "/" ) {
		return url.substring(0, url.length-1);
	}
	return url;
};
export default {
	replaceUrlBackslashAtEnd,
	getHeadersAuthorization,
	setHeadersAuthorization,
	themeLocalStorageAndState,
	switchThemeLocalStorageAndState
};