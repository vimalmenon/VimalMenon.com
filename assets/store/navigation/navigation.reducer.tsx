import navigation from "./navigation.state";
import navigationTypes from "./navigation.types";

export default function (oldState:INavigationState=navigation, action):INavigationState {
	if(action.type === navigationTypes.SET_SELECTED_NAVIGATION) {
		return {...oldState};
	}
	return oldState;
}