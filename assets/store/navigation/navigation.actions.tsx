import { Action } from "redux";
import navigationTypes from "./navigation.types";


class SetSelectedNavigation implements IAction<INavigation>{
	public type = navigationTypes.SET_SELECTED_NAVIGATION
	public payload;
	constructor(data: INavigation) {
		this.payload = data;
	}

}

export default {
	SetSelectedNavigation
};