import common from "./common.state";
import CommonTypes from "./common.types";

export default function (oldState=common, action):ICommonState  {
	if(action.type === CommonTypes.SET_THEME) {
		const state = {...oldState};
		state["theme"] = action.payload;
		return state;
	}
	return oldState;
}