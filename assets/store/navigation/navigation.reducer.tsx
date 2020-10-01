import navigation from "./navigation.state";
import navigationTypes from "./navigation.types";
import {SetSelectedNavigation} from "./navigation.actions";

export default function (oldState:INavigationState=navigation, action: SetSelectedNavigation):INavigationState {
	if(action.type === navigationTypes.SET_SELECTED_NAVIGATION) {
		return {...oldState};
	}
	return oldState;
}